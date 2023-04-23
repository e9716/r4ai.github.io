import Link from 'next/link'
import { FC } from 'react'

import { Date } from '@/components/common/Date'
import { Layout } from '@/components/layouts/Layout'
import { SortedPostDataType, getSortedPostDatas } from '@/lib/posts'

export async function getStaticProps() {
  const allPostsData = await getSortedPostDatas()
  return {
    props: {
      allPostsData,
    },
  }
}

export interface FCPosts {
  allPostsData: SortedPostDataType[]
}

const Posts: FC<FCPosts> = ({ allPostsData }) => {
  return (
    <Layout title='Posts' description='posts list' className='container mx-auto max-w-xl px-2'>
      <section>
        <h1 className='text-4xl font-bold'>Posts</h1>
        <p className='text-gray-500'>All posts</p>
      </section>
      <section className='mt-6'>
        <ul className='flex flex-col gap-2 text-lg font-semibold'>
          {allPostsData.map(({ slug, frontMatter: { title, date } }) => (
            <li key={slug}>
              <Link className='underlineAnimation link' href={`/posts/${slug}`}>
                {title}
              </Link>
              <br />
              <small className='text-gray-500'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Posts
