/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8dff8d',
        'primary-hover': '#6dcc6d',
        'primary-hover': '#4D94C4',
        secondary: '#B5CEA8',
        'background-light': '#252526',
        'text-light': '#D4D4D4',
        'text-muted': 'rgba(212, 212, 212, 0.6)',
        'timeline-bg': '#1E1E1E',
        'timeline-text': '#D4D4D4',
        'timeline-line': '#3C3C3C',
        'code-bg': '#1E1E1E',
      },
      boxShadow: {
        custom: '0 4px 8px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        fadeUp: 'fadeUp 1s ease forwards',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeUp: {
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
