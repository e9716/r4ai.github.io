import '../styles/globals.css'
/* eslint-disable */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
