import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
plugins: [forms, typography]

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'sans-serif'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 10px 25px rgba(2,6,23,0.7)'
      }
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [forms, typography],
}
