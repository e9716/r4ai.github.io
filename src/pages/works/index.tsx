import Link from 'next/link'
import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'

import { Date } from '@/components/common/Date'
import { GitHub } from '@/components/icons/GitHub'
import { Layout } from '@/components/layouts/Layout'
import { Image } from '@/components/primitive/Image'
import { TAGS_COLOR_TABLE, Tags } from '@/lib/constants'
import { SortedWorksDataType, getSortedWorksData } from '@/lib/works'
import style from '@/styles/works.module.css'

export async function getStaticProps() {
  const allWorksData = await getSortedWorksData()
  return {
    props: {
      allWorksData,
      tags: TAGS_COLOR_TABLE,
    },
  }
}

interface Props {
  allWorksData: SortedWorksDataType[]
  tags: Tags
}

const Works: FC<Props> = ({ allWorksData, tags }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function getColor(tag: string) {
    if (tag in tags) {
      return tags[tag]
    } else {
      return resolvedTheme === 'dark' ? '#ffffff' : '#000000'
    }
  }

  return (
    <Layout title='works' description='Personal works' className='container mx-auto flex flex-col gap-12 px-4 py-4'>
      <section className='mx-auto flex w-full max-w-xl flex-col gap-4 pb-2'>
        <h1 className='text-4xl font-black'>Works</h1>
        <p className='text-base text-gray-500'>Applications, software, games, etc. developed by me.</p>
      </section>
      <section className='mx-auto w-full max-w-3xl'>
        {allWorksData.map(({ slug, frontMatter: { title, description, date, image, github, tags } }) => (
          <div key={slug}>
            <div className={`h-96 gap-2 rounded-2xl ${style.card} `}>
              <Link href={`/works/${slug}`}>
                <Image
                  src={image}
                  alt={title}
                  className={`sh col-start-1 row-start-1 h-full w-full`}
                  imageClass='rounded-2xl shadow-xl'
                />
              </Link>
              <div className='col-start-2 row-start-1 flex flex-col gap-3 p-3 text-black dark:text-white'>
                <div>
                  <Link href={`/works/${slug}`} className='link'>
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                  </Link>
                  <p className='text-gray-500'>{description}</p>
                </div>
                {github === '' ? (
                  <></>
                ) : (
                  <div className='mr-auto'>
                    <Link href={github} className='link flex flex-row gap-2'>
                      <span className='font-mono'>GitHub</span>
                      <GitHub className='inline-block h-6 w-6' />
                    </Link>
                  </div>
                )}
                <div className='flex flex-wrap'>
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`block border text-black dark:text-white rounded-lg mr-2 my-1 py-0.5 px-1 text-sm`}
                      style={{
                        borderColor: getColor(tag),
                        opacity: 0.7,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='text-gray-500 inline-block'>
                  <Date dateString={date} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export default Works
