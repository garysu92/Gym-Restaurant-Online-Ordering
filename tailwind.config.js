/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '200': '200px',
        '500': '500px',
        '60vh': '60vh'
      },
      fontFamily: {
        anton: ['Anton', 'sans'],
      },
    },
  },
  plugins: [],
}

