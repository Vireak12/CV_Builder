/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        khmer: ['"Noto Serif Khmer"', '"Hanuman"', 'serif'],
        cv: ['"Lato"', '"Helvetica Neue"', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#e0e8ff',
          200: '#c4d0ff',
          300: '#96a8ff',
          400: '#6175f8',
          500: '#4f5ef5',
          600: '#3b42e8',
          700: '#3032cc',
          800: '#2a2ba5',
          900: '#272982',
          950: '#191a4f',
        },
        surface: {
          DEFAULT: '#0f0f1a',
          card:    '#1a1a2e',
          input:   '#1e1e35',
          border:  '#2e2e50',
        },
        accent: {
          purple: '#8b5cf6',
          cyan:   '#06b6d4',
          emerald:'#10b981',
          amber:  '#f59e0b',
          rose:   '#f43f5e',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in':     'fadeIn 0.3s ease-out',
        'slide-up':    'slideUp 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.35s ease-out',
        'pulse-soft':  'pulseSoft 2s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn:      { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:     { from: { opacity: 0, transform: 'translateY(12px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideInLeft: { from: { opacity: 0, transform: 'translateX(-16px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        pulseSoft:   { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.6 } },
        shimmer:     { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      boxShadow: {
        'glow-brand': '0 0 20px rgba(79, 94, 245, 0.35)',
        'glow-cyan':  '0 0 20px rgba(6, 182, 212, 0.3)',
        'card':       '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
