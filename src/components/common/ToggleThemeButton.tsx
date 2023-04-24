import { SunIcon } from '@heroicons/react/24/outline'
import { MoonIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'

interface ToggleThemeButtonProps {
  className?: string
}

export const ToggleThemeButton: FC<ToggleThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      aria-label='toggle color mode'
      type='button'
      onClick={toggleTheme}
      className={`rounded-lg p-1.5 transition duration-200 hover:bg-black/10 dark:hover:bg-white/10 ${className} `}
    >
      <div className='duration-500 hover:rotate-12 hover:scale-110 hover:text-violet-500 dark:hover:text-amber-300'>
        {theme === 'dark' ? (
          <SunIcon className='h-7 w-7 sm:h-6 sm:w-6' />
        ) : (
          <MoonIcon className='h-7 w-7 sm:h-6 sm:w-6' />
        )}
      </div>
    </button>
  )
}
