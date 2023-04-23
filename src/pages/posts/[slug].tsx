import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { FC } from 'react'

import { Layout } from '@/components/layouts/Layout'
import { getAllPostSlugs, getPostData, postFrontMatterType } from '@/lib/posts'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { source, frontMatter } = await getPostData(params?.slug as string)

  return { props: { source, frontMatter } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs()

  return { paths, fallback: false }
}

const components = { Head, Image, Link }

interface PostProps {
  source: MDXRemoteSerializeResult
  frontMatter: postFrontMatterType
}

const Post: FC<PostProps> = ({ source, frontMatter }) => {
  return (
    <Layout title={frontMatter.title} description={frontMatter.description}>
      <article className='prose prose-zinc mx-auto mt-6 max-w-2xl px-2 dark:prose-invert'>
        <MDXRemote {...source} components={components} />
      </article>
    </Layout>
  )
}

export default Post
