/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Color Palette
        'indigo': {
          '50': '#EEF2FF',
          '100': '#E0E7FF',
          '300': '#A5B4FC',
          '600': '#3730A3',
          '700': '#2D2A6F'
        },
        'coral': {
          '50': '#FFF1F2',
          '600': '#FF6B6B',
          '700': '#E53E3E'
        },
        'slate': {
          '50': '#F8FAFC',
          '700': '#64748B',
          '900': '#1E293B'
        },
        'teal': {
          '50': '#F0FDFA',
          '300': '#2DD4BF',
          '600': '#0D9488'
        },
        'lavender': {
          '50': '#F5F3FF',
          '300': '#A78BFA',
          '600': '#7C3AED'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(55, 48, 163, 0.15)',
        'medium': '0 15px 35px -10px rgba(55, 48, 163, 0.2)'
      },
      animation: {
        'subtle-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
}