/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#C8102E',
          dark: '#A50D25',
          light: '#E03A54',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};