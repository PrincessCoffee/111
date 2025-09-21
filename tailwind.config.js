/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#2d5552',
        'brand-gold': '#c5a553',
        'princess-teal': {
          600: '#3a6b67',
          700: '#2d5552',
          800: '#1f3d3a'
        },
        'princess-gold': {
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04'
        }
      },
      fontFamily: {
        'tajawal': ['Tajawal', 'sans-serif'],
      },
      backgroundImage: {
        'princess-gradient': 'linear-gradient(135deg, #2d5552 0%, #3a6b67 50%, #2d5552 100%)',
        'gold-gradient': 'linear-gradient(135deg, #eab308 0%, #f59e0b 100%)'
      }
    },
  },
  plugins: [],
}