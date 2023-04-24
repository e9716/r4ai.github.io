import { FC } from 'react'

import { Layout } from '@/components/layouts/Layout'

const Works: FC = () => {
  return (
    <Layout
      title='works'
      description='Personal works'
      className='container mx-auto flex max-w-xl flex-col gap-12 px-4 py-4'
    >
      <section className='flex flex-col gap-4'>
        <h1 className='pb-2 text-4xl font-black'>Works</h1>
      </section>
    </Layout>
  )
}

export default Works
