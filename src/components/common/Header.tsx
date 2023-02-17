import { FC } from 'react'

import { HeaderLink } from './HeaderLink'
import { ToggleThemeButton } from './ToggleThemeButton'

export const Header: FC = () => {
  return (
    <header className='sticky top-0 flex h-8 px-5 backdrop-blur-md dark:backdrop-brightness-75'>
      <nav className='self-centefont flex flex-none gap-4'>
        <HeaderLink href='/'>Home</HeaderLink>
        <HeaderLink href='/posts'>Blog</HeaderLink>
      </nav>
      <div className='grow'></div>
      <ToggleThemeButton className='self-center' />
    </header>
  )
}
