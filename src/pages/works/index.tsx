import Link from 'next/link'
import { FC } from 'react'

import { Layout } from '@/components/layouts/Layout'
import { worksFilePaths } from '@/lib/works'

export function getStaticProps() {
  return {
    props: {
      worksFilePaths,
    },
  }
}

interface Props {
  worksFilePaths: string[]
}

const Works: FC<Props> = ({ worksFilePaths }) => {
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
        {worksFilePaths.map((path: string) => (
          <Link key={path} href={`/works/${path.split('.')[0]}`}>
            <p>{path.split('.')[0]}</p>
          </Link>
        ))}
      </section>
    </Layout>
  )
}

export default Works
