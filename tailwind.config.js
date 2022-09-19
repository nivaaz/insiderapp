/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Source Sans Pro", "sans-serif"],
        para: ["Source Sans Pro", "sans-serif"],
      },
      colors:{
        primary:{
          light: '#02FBFF',
          dark: '#246D6F',
          default: '#4EC8CA'
        } 
      },
      animation:{
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
};
