import Link from 'next/link'
import { FC, ReactNode } from 'react'

export interface HeaderLinkProps {
  href: string
  children: ReactNode
}

export const HeaderLink: FC<HeaderLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className='flex-none font-mono font-semibold'>
      {children}
    </Link>
  )
}
