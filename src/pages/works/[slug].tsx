import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { FC } from 'react'

import { Date } from '@/components/common/Date'
import { Layout } from '@/components/layouts/Layout'
import { getAllWorksSlugs, getWorksData, worksFrontMatterType } from '@/lib/works'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { source, frontMatter } = await getWorksData(params?.slug as string)

  return { props: { source, frontMatter } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorksSlugs()

  return { paths, fallback: false }
}

const components = { Head, Image, Link }

interface PostProps {
  source: MDXRemoteSerializeResult
  frontMatter: worksFrontMatterType
}

const Post: FC<PostProps> = ({ source, frontMatter }) => {
  return (
    <Layout title={frontMatter.title} description={frontMatter.description}>
      <article className='prose prose-zinc mx-auto mt-6 max-w-2xl px-2 dark:prose-invert'>
        <section className='mx-auto mb-8 flex flex-col items-center gap-2'>
          <h1 className='mb-0 text-4xl'>{frontMatter.title}</h1>
          <p className='m-0 mt-2'>{frontMatter.description}</p>
          <Date dateString={frontMatter.date} />
        </section>
        <section>
          <MDXRemote {...source} components={components} />
        </section>
      </article>
    </Layout>
  )
}

export default Post
