import Link from 'next/link'
import { FC, ReactNode } from 'react'

import styles from './HeaderLink.module.css'

export interface HeaderLinkProps {
  href: string
  children: ReactNode
}

export const HeaderLink: FC<HeaderLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className={`flex-none text-base font-bold text-black/70 transition hover:text-black dark:text-white/70 dark:hover:text-white ${styles.underlineAnimation}`}
    >
      {children}
    </Link>
  )
}
