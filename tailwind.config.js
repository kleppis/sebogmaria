/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Fraunces"', 'serif']
    },
    extend: {
      colors: {
        primary: '#F3E7D8',
        pinkLight: '#F8B3CC',
        pinkDark: '#F85183',
        goldLight: '#C7B65B',
        orange: '#E6951D'
      }
    },
  },
  plugins: [],
}

