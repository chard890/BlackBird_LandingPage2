/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f4f4f2',
        paper: '#ededeb',
        stone: '#d4d4d0',
        sand: '#b8b8b3',
        beige: '#e4e4e1',
        charcoal: '#161616',
        olive: '#666662',
        forest: '#111111',
        bronze: '#8a8a86',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(18, 18, 18, 0.12)',
        card: '0 20px 60px rgba(18, 18, 18, 0.08)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.20), transparent 30%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.15), transparent 25%), radial-gradient(circle at 80% 80%, rgba(120,120,120,0.10), transparent 25%)",
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
