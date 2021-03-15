module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      fontSize: {
        'xs': '1.125rem',   // 18px
        'sm': '1.375rem',   // 21px
      },
      fontFamily: {
        'averta': ['Averta', 'Open Sans'],
        'gabriela': ['Gabriela', 'serif']
      },
      colors: {
        's-turquoise': '#5EC4B6',
        's-gold': '#D2B271',
        's-purple': '#312B6E',
        's-turquoise-light': '#D9EEE7'
      },
      backgroundImage: theme => ({
        'blocks': "url('/images/svg/blocks.svg')",
        'stripe': "url('/images/svg/stripe.svg')",
      }),
      zIndex: {
        '-10': '-10'
      },
      inset: {
        '1/10': '25%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
