import { FC } from 'react'

import { HeaderLink } from './HeaderLink'
import { ToggleThemeButton } from './ToggleThemeButton'

export const Header: FC = () => {
  return (
    <header className='sticky top-0 h-10 w-full px-4 backdrop-blur-md dark:backdrop-brightness-75'>
      <div className='container mx-auto flex h-full w-full max-w-xl'>
        <nav className='font mx-auto flex flex-none gap-4 self-center'>
          <HeaderLink href='/'>Home</HeaderLink>
          <HeaderLink href='/posts'>Blog</HeaderLink>
        </nav>
        <div className='grow'></div>
        <ToggleThemeButton className='self-center' />
      </div>
    </header>
  )
}
