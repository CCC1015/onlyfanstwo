/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
  colors:{
        socialBg:'#F5F7FB',
        socialBlue: '#218DFA',
      },
      },     
  },
  plugins: [],
}
