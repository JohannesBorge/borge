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
        background: '#0f0f11',
        surface: '#1a1a1d',
        primary: '#5b78f6',
        secondary: '#00c2b2',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
        border: '#2e2e33',
        hover: '#26262b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 