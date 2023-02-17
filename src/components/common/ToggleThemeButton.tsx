import { useTheme } from 'next-themes'
import { FC } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

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
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}
