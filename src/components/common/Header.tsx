import Link from 'next/link'
import { FC } from 'react'

import { ToggleThemeButton } from './ToggleThemeButton'

export const Header: FC = () => {
  return (
    <header className='sticky top-0 flex px-5 backdrop-blur-md dark:backdrop-brightness-75'>
      <nav className='flex flex-none gap-4'>
        <Link href='/' className='flex-none hover:animate-spin'>
          Home
        </Link>
        <Link href='/posts' className='flex-none'>
          Blog
        </Link>
      </nav>
      <div className='grow'></div>
      <ToggleThemeButton />
    </header>
  )
}
