/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html', 'main.js'],
  theme: {
    extend: {
      fontFamily:{
        body: ['Raleway'],
        heading: ['Noto Sans']
      }
    },
  },
  plugins: [],
}

