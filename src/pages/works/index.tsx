import Link from 'next/link'
import { FC } from 'react'

import { Layout } from '@/components/layouts/Layout'
import { SortedWorksDataType, getSortedWorksData } from '@/lib/works'

export async function getStaticProps() {
  const allWorksData = await getSortedWorksData()
  return {
    props: {
      allWorksData,
    },
  }
}

interface Props {
  allWorksData: SortedWorksDataType[]
}

const Works: FC<Props> = ({ allWorksData }) => {
  return (
    <Layout
      title='works'
      description='Personal works'
      className='container mx-auto flex max-w-xl flex-col gap-12 px-4 py-4'
    >
      <section className='flex flex-col gap-4'>
        <h1 className='pb-2 text-4xl font-black'>Works</h1>
      </section>
      <section>
        {allWorksData.map(({ slug, frontMatter: { title, description, date } }) => (
          <article key={slug} className='flex flex-col gap-2'>
            <Link href={`/works/${slug}`} className='underlineAnimation link'>
              <h2 className='text-2xl font-semibold'>{title}</h2>
            </Link>
            <p className='text-gray-500'>{description}</p>
            <small className='text-gray-500'>{date}</small>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export default Works
