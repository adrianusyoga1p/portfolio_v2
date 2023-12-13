/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#057DCD',
        secondary: '#17B1B4',
        dark: '#213746',
        light: '#E8EEF1',
      }
    },
  },
  plugins: [],
}