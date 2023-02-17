import '../styles/globals.css'
/* eslint-disable */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { Noto_Sans_JP } from '@next/font/google'
import localFont from '@next/font/local'

const noto_sans_jp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-jp',
})

const hackgen = localFont({
  src: [
    {
      path: './HackGen-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './HackGen-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-hackgen',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
