/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blanc: "#fafafa",
      brun: "#413b3b",
      vert: "#6ac25e",
      vertFonce: "#129418",
      vertBleu: "#00b98f",
      brunClair: "#fdf4ee",
      noir: "#1c1514",
      bleuClair: "#c9f2e4",
      bleuTurquoise: "#00aeb6"
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
      },
    },
  },
  plugins: [],
}