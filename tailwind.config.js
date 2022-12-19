/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // plant: {
        //   10: '#C0D078',
        //   50: '#88AE45',
        //   550: '#48bb78',
        //   450: '#68d391',
        //   1000: '#007B22 ',
        //   1200: '#2FD566',
        // },
        tangora: {
          10: '#002B3A',
        },
        offwhite: {
          10: '#E6EDB7',
          20: '#DFE8A3',
        },
        oyellow: {
          10: '#F1BC19',
        },
        brown: {
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548',
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#472B29',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
