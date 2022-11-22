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
        plant: {
          10: '#C0D078',
          50: '#88AE45',
          550: '#48bb78',
          450: '#68d391',
          1000: '#007B22 ',
          1200: '#2FD566',
        },
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
        bbrown: {
          10: '#9F8066',
          20: '#472B29',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
