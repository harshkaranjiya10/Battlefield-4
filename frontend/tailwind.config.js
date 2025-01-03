/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        menu__background: "url('/menu__background.png')"
      },
      fontFamily: {
        Rajdhani: ['Rajdhani', 'sans-serif'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}