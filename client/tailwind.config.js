/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#ff77ff",
        secondary : "#058187"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

