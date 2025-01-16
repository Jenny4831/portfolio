/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        'primary-hover': '#0063CC',
        secondary: '#34C759',
        'background-light': '#FFFFFF',
        'text-light': '#F5F5F7',
        'text-muted': 'rgba(29, 29, 31, 0.6)',
        'timeline-bg': '#F5F5F7',
        'timeline-text': '#1D1D1F',
        'timeline-line': '#e5e7eb',
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
