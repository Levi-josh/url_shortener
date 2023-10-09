/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        newblue: "#a7c7ec"
      },
      width: {
        100: '500px',
        200: '700px',
        300: '950px',
        400: '1000px'
      }
    },
  },
  plugins: [],
}

