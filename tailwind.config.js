/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts.jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['"Fraunces"', 'serif']
    },
    extend: {
      colors: {
        primary: '#F3E7D8',
        pinkLight: '#F8B3CC',
        pinkLight2: {
          50: 'rgba(248, 179, 204, 0.05)', // 5% opacity
          100: 'rgba(248, 179, 204, 0.1)', // 10% opacity
          200: 'rgba(248, 179, 204, 0.2)', // 20% opacity
          300: 'rgba(248, 179, 204, 0.3)', // 30% opacity
          400: 'rgba(248, 179, 204, 0.4)', // 40% opacity
          500: 'rgba(248, 179, 204, 0.5)', // 50% opacity
          600: 'rgba(248, 179, 204, 0.6)', // 60% opacity
          700: 'rgba(248, 179, 204, 0.7)', // 70% opacity
          800: 'rgba(248, 179, 204, 0.8)', // 80% opacity
          900: 'rgba(248, 179, 204, 0.9)', // 90% opacity
        },
        pinkDark: '#F85183',
        goldLight: '#C7B65B',
        orange: {
          50: 'rgba(255, 165, 0, 0.05)', // 5% opacity
          100: 'rgba(255, 165, 0, 0.1)', // 10% opacity
          200: 'rgba(255, 165, 0, 0.2)', // 20% opacity
          300: 'rgba(255, 165, 0, 0.3)', // 30% opacity
          400: 'rgba(255, 165, 0, 0.4)', // 40% opacity
          500: 'rgba(255, 165, 0, 0.5)', // 50% opacity
          600: 'rgba(255, 165, 0, 0.6)', // 60% opacity
          700: 'rgba(255, 165, 0, 0.7)', // 70% opacity
          800: 'rgba(255, 165, 0, 0.8)', // 80% opacity
          900: 'rgba(255, 165, 0, 0.9)', // 90% opacity
        },
      }
    },
  },
  plugins: [],
}

