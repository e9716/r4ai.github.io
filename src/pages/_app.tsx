import '@/styles/globals.css'
import '@/styles/post.css'

/* eslint-disable */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import localFont from 'next/font/local'

const hackgen = localFont({
  src: [
    {
      path: './fonts/HackGen/HackGen-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-hackgen',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <div className={`${hackgen.variable}`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
