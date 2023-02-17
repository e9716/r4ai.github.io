import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { Layout } from '@/components/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout
        title='About me'
        description='About me'
        className='container mx-auto flex max-w-lg flex-col gap-12 py-4 px-4'
      >
        <section>
          <Image priority src='/images/profile.jpg' alt='' width={144} height={144} className='rounded-full pb-2' />
          <h2 className='pb-2 text-5xl font-black'>Rai</h2>
          <p className='font-mono text-lg font-semibold'>
            とある情報系大学生。
            <br />
            最近は Rust でのゲーム開発に興味があります。
          </p>
        </section>
        <section>
          <h2 className='pb-4 text-3xl font-black'>
            Favorite
            <br />
            programming languages
          </h2>
          <ul className='list-inside list-disc font-mono text-lg font-semibold'>
            <li>Python</li>
            <li>Rust</li>
            <li>Typescript</li>
          </ul>
        </section>
        <section>
          <h2 className='pb-2 text-3xl font-black'>Interests</h2>
          <ul className='list-inside list-disc font-mono text-lg font-semibold'>
            <li>Game Programming</li>
            <li>3DCG</li>
            <li>Compiler</li>
            <li>WebAssembly</li>
            <li>Tauri</li>
          </ul>
        </section>
        <section>
          <h2 className='pb-2 text-3xl font-black'>Links</h2>
          <ul className='list-inside list-disc font-mono text-lg font-semibold'>
            <li>
              <Link href='https://github.com/r4ai'>GitHub</Link>
            </li>
            <li>
              <Link href='https://zenn.dev/t4aru'>Zenn</Link>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  )
}
