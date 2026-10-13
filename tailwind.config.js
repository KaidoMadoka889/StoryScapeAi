/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-900': '#0b0b0d',
        'surface-800': '#111214',
        'muted-600': '#9aa3b2',
        'accent-blue': '#3aa0ff',
        'accent-purple': '#7b61ff'
      }
    }
  },
  plugins: []
};
