/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-primary': '#D9D9D9',
        'gray-secondary': '#D6D6D6',
        'gray-tertiary': '#EFEFEF',
      },
      boxShadow: {
        'primary': '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
        'footer': '0px 0px 23px 1px rgba(0, 0, 0, 0.25)',
        'statement-card': '0px 4px 150px 0px rgba(160, 160, 160, 0.25)',
      },
    },
  },
  plugins: [],
}