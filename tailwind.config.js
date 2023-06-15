/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '300': '3.00',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },
      backdropSepia: {
        25: '.25',
        50: '.50',
        75: '.75',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'greatvibes': ["GreatVibes", "cursive"],
        'berkshireswash': ["BerkshireSwash", "sans-serif"],
      },
      blur: {
        xxs: '1px',
        xs: '2px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

