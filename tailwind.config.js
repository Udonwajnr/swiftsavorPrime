/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "white":"#FFFBFF",
        "light-red":"#C00100",
        "dark-black":"#121212",
        "light-black":"#282828"
      }
    },
  },
  plugins: [],
}

