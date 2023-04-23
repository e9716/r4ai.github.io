import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { FC } from 'react'

import { Layout } from '@/components/layouts/Layout'
import { getPostData, postFilePaths } from '@/lib/posts'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { source, frontMatter } = await getPostData(params?.slug)

  return { props: { source, frontMatter } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug } }))

  return { paths, fallback: false }
}

const components = { Head, Image, Link }

interface postFrontMatterType {
  title: string
  date: string
  description: string
  slug: string
}

interface PostProps {
  source: MDXRemoteSerializeResult
  frontMatter: postFrontMatterType
}

const Post: FC<PostProps> = ({ source, frontMatter }) => {
  return (
    <Layout title={frontMatter.title} description={frontMatter.description}>
      <article className='prose prose-zinc mx-auto mt-6 max-w-3xl px-2 dark:prose-invert'>
        <MDXRemote {...source} components={components} />
      </article>
    </Layout>
  )
}

export default Post
