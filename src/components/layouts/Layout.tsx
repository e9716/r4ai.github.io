import { FC, ReactNode } from 'react'

import { Footer } from '../common/Footer'
import { Head, HeadProps } from '../common/Head'
import { Header } from '../common/Header'

type LayoutProps = {
  children: ReactNode
  className?: string
} & HeadProps

export const Layout: FC<LayoutProps> = ({ title, description, lang, children, className }) => {
  return (
    <>
      <Head title={title} description={description} lang={lang} />
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </>
  )
}
