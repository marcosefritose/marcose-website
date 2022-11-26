/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['"Source Code Pro"', 'sans'],
    },
    extend: {
      colors: {
        'dark': '#686868',
        'light': '#FCFCFC',
        'data': '#5C86C6',
        'web': '#BB4848'
      },
    },
  },
  safelist: [
    'bg-data', 'border-data', 'text-data',
    'bg-web', 'border-web', 'text-web',
    'bg-dark'
  ],
  plugins: [],
}
