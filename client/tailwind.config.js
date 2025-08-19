/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        viridian: '#40826D',
        sienna: '#E97451',
        goldenrod: '#DAA520',
        ivory: '#F5F1E3',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto'],
      },
    },
  },
  plugins: [],
}
