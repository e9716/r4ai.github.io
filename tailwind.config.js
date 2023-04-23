const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss/typography').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-hackgen)', ...defaultTheme.fontFamily.mono],
        serifjp: ['var(--font-noto-serif-jp)'],
        hackgen35: ['var(--font-hackgen35)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
