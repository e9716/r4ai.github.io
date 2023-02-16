import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ToggleThemeButton: FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted((prev) => !prev)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button aria-label='toggle color mode' type='button' onClick={toggleTheme}>
      {mounted && theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  )
}
