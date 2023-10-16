/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // newblue: "#a7c7ec"
        newblue: ' #d0e6ff',
        iconblue: '#4893e4',
      },
      width: {
        100: '500px',
        150: '520px',
        200: '550px',
        250: '580px',
        300: '950px',
        400: '1000px',
        120: '2000px'
      },
      borderWidth: {
        r: "0.1px"
      },
      minWidth: {
        md2: '890px'
      },

    },
  },
  plugins: [],
}

