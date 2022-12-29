import { Colors, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps, Styles } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  disableTransitionOnChange: false,
}

const colors: Colors = {
  wakakusa: {
    '50': '#FBFFE5',
    '100': '#F4FFB8',
    '200': '#EDFF8A',
    '300': '#E7FF5C',
    '400': '#E0FF2E',
    '500': '#D9FF00',
    '600': '#AECC00',
    '700': '#829900',
    '800': '#576600',
    '900': '#2B3300',
  },
}

const styles: Styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('rgb(243, 245, 250)', 'rgb(25, 25, 25)')(props),
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease',
      transitionDelay: '0s',
      transitionProperty: 'all',
    },
  }),
}

const theme = extendTheme({
  config,
  styles,
})

export default theme
