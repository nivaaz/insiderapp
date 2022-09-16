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
        primary: '#CACDE9'
      }
    },
  },
  plugins: [],
};
