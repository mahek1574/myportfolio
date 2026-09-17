/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#0B0B0B',
          900: '#111111',
          850: '#1A1A1A',
          800: '#222222',
          700: '#2C2C2C',
          600: '#383838',
        },
        gold: {
          400: '#E5B869',
          500: '#D6A85F',
          600: '#C4954A',
        },
        warm: {
          white: '#F3F0EA',
          slate: '#A7A29A',
          border: '#262626',
        },
        cyber: {
          900: '#111111',
          850: '#1A1A1A',
          border: '#262626',
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(circle at 50% 30%, rgba(214, 168, 95, 0.12) 0%, transparent 70%)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(214, 168, 95, 0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(214, 168, 95, 0.6))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

