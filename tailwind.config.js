/**** Tailwind Config ****/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#eef0ff',
          200: '#dfe2ff',
          300: '#c4c9ff',
          400: '#9aa4ff',
          500: '#6c77ff',
          600: '#4f58e6',
          700: '#3c44b4',
          800: '#2f378c',
          900: '#272f6d'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
