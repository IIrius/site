/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./privacy.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'alice-blue': '#F0F8FF',
        'sky-blue': '#87CEFA',
        'dark-slate': '#2c3e50',
        'accent-orange': '#FFA500',
        'light-gray': '#EAECEE',
      },
    },
  },
  plugins: [],
}