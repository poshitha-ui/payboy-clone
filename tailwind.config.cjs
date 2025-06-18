/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          shantell: ['Shantell Sans', 'cursive'],
        },
        boxShadow: {
          'pbShadow': '0 3px 10px 0 rgba(0,0,0,.05)',
          'custom-dark': '0 10px 20px -5px rgba(0, 0, 0, 0.5)',
        }
      },
    },
    plugins: [],
  }