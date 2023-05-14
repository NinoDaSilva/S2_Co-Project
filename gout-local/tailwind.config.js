/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      white: '#fafafa',
      black: '#000000',
      transparent: 'transparent',
      gray: colors.zinc
    },
    fontFamily: {
      specific: ['Mochiy Pop One', 'sans-serif'],
      Subheading: ['Montserrat', 'sans-serif'],
      primary: ['Nunito', 'sans-serif'],
      secondary: ['Oxygen', 'sans-serif'],
      title: ['Raleway', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      }
    }
  },
  plugins: []
}
