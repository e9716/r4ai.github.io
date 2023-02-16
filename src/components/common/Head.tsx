import NextHead from 'next/head'
import { FC } from 'react'

interface HeadProps {
  title: string
  description: string
  lang?: 'ja' | 'en'
}

export const Head: FC<HeadProps> = ({ title, description, lang = 'ja' }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta lang={lang} />
      <link rel='icon' href='/images/favicon.ico' />
    </NextHead>
  )
}
