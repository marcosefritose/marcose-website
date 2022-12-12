/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Source Code Pro"', 'sans'],
      },
      colors: {
        'dark': '#4E5769',
        'light': '#FFFFFF',
        'light-blue': '#F1F4FE',
        'data': '#5092C1',
        'web': '#C89361'
      },
      backgroundImage: {
        'blurred': "url('/images/blurred.svg')",
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity : 0 },
          '50%': { opacity: 1 },
        }
      }
    },
  },
  safelist: [
    'bg-data', 'border-data', 'text-data',
    'bg-web', 'border-web', 'text-web',
    'bg-dark', 'border-dark', 'bg-gray-700'
  ],
  plugins: [
    require('tailwind-scrollbar'),
  ], 
}