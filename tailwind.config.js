/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'blanc': '#fafafa',
      'brun': '#413b3b',
      "vertClair" : '#e5f4ef',
      'vert': '#6ac25e',
      'vertFonce': '#129418',
      'vertBleu': '#00b98f',
      'brunClair': '#fdf4ee',
      'noir': '#1c1514',
      'bleuClair': '#c9f2e4',
      'bleuTurquoise': '#00aeb6',
      'transparent': 'transparent',
    },
    fontFamily: {
      specific: ['Mochiy Pop One', 'sans-serif'],
      Subheading: ['Montserrat', 'sans-serif'],
      primary: ['Nunito', 'sans-serif'],
      secondary: ['Oxygen', 'sans-serif'],
      title: ['Raleway', 'sans-serif'],
    },
    fontSize: {
      '5xs': '0.8rem', //12px
      '4xs': '0.875rem', //14px
      '3xs': '0.9375rem', //15px
      '2xs': '1rem', //16px
      'xs': '1.125rem', //18px
      'sm': '1.25rem', //20px
      'base': '1.375rem', //22px
      'lg': '1.5rem', //24px
      'xl': '1.875rem', //30px
      '2xl': '2.375rem', //38px
      '3xl': '2.5rem', //40px
      '4xl': '5rem' //80px
    },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))'
      },
    },
  },
  plugins: [],
}