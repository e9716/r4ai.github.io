import { FC } from 'react'

import { HeaderLink } from './HeaderLink'
import { ToggleThemeButton } from './ToggleThemeButton'

export const Header: FC = () => {
  return (
    <header className={`sticky top-0 z-50 h-16 w-full px-4 backdrop-blur-md dark:backdrop-brightness-75 sm:h-12`}>
      <div className='container mx-auto flex h-full w-full max-w-2xl'>
        <nav className='mx-auto flex flex-none gap-4 self-center text-xl'>
          <HeaderLink href='/' className='text-lg sm:text-base'>
            Home
          </HeaderLink>
          <HeaderLink href='/works' className='text-lg sm:text-base'>
            Works
          </HeaderLink>
          <HeaderLink href='/posts' className='text-lg sm:text-base'>
            Blog
          </HeaderLink>
        </nav>
        <div className='grow'></div>
        <ToggleThemeButton className='self-center' />
      </div>
    </header>
  )
}
