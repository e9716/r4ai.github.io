import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { FC } from 'react'

interface ToggleThemeButtonProps {
  className?: string
}

export const ToggleThemeButton: FC<ToggleThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button aria-label='toggle color mode' type='button' onClick={toggleTheme} className={className}>
      {theme === 'dark' ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-5 w-5' />}
    </button>
  )
}
