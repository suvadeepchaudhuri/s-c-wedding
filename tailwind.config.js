/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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

