const colors = require('tailwindcss/colors');

module.exports = {
  prefix: '',
  purge: [
    './src/**/*.{html,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#00a8e8',
      secondary: '#1985a1',
      accent: '#f5cb5c',
      white: '#ffffff',
      darkBlue: '#00171f',
      dark: '#242423',
      gray: colors.coolGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
