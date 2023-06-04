/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveToBottom: {
          '0%': {
            top: '-100%'
          },
          '100%': {
            top: '0'
          },
        },
        scaleX: {
          'to': {
            transform: 'scaleX(0)'
          },
          'from': {
            tramsform: 'scaleX(1)'
          }
        }
      },
      colors: {
        modal: 'rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'toBottom': 'moveToBottom .4s linear',
        'navbarBorderHover': 'scaleX .3s linear'
      }
    },
  },
  plugins: [],
}

