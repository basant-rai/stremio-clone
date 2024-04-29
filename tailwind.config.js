/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./tailwind/**/*.{html,js}",
    "./js/**/*.{html,js}"

  ],
  theme: {
    extend: {
      container: {
        screens: {
          "2xl": "1440px"
        }
      }
    },
  },
  plugins: [],
}

