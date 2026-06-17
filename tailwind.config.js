/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['"Zen Dots"', 'cursive'],
        orbitron: ['"Orbitron"', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        foreground: '#ededed',
        primary: '#ffffff',
        muted: '#a3a3a3',
        border: '#262626',
        card: '#121212',
      }
    },
  },
  plugins: [],
}
