/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#1A1A1A',
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
        },
        border: '#2A2A2A',
        primary: '#01c2b2',
        hover: '#00a89a',
        teal: {
          50: '#e6f7f6',
          100: '#b3e9e5',
          200: '#80dbd4',
          300: '#4dcdc3',
          400: '#1abfb2',
          500: '#01c2b2',
          600: '#00a89a',
          700: '#008e82',
          800: '#00746a',
          900: '#005a52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 