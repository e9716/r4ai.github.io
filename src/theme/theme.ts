import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  disableTransitionOnChange: false,
}

const styles = {
  global: {
    body: {
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease',
      transitionDelay: '0s',
      transitionProperty: 'all',
    },
  },
}

const theme = extendTheme({
  config,
  styles,
})

export default theme
