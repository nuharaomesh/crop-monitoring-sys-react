/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '96': '58rem',
        '55': '54.5rem',
        '6/7': '90%',
        '75v': '75vh',
        '44v': '44vh',
        '21r': '21rem'
      },
      width: {
        '20%': '13%'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '12p': '15px',
        '20p': '20px'
      },
      borderRadius: {
        custom: '90px 100px 34px 30px',
      },
      colors: {
        customGray: '#7d7d7d',
        dimgrey: 'dimgrey'
      },
      padding: {
        '14p': '14px'
      }
    },
  },
  plugins: [],
}

