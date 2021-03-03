module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      fontSize: {
        'xs': '1.125rem',   // 18px
        'sm': '1.375rem',   // 21px
        '7x1': '5rem',      // 80px
        '3x1': '3.125rem',  // 50px
      },
      fontFamily: {
        'averta': ['Averta', 'Open Sans'],
      },
      colors: {
        's-turquoise': '#5EC4B6',
        's-gold': '#D2B271',
        's-purple': '#312B6E',
        's-turquoise-light': '#D9EEE7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
