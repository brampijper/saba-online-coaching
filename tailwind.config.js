module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      fontSize: {
        'xss': '0.65rem',
        'xs': '0.85rem',  // 14px
        'base': '1.125rem',   // 18px
        'sm': '1.375rem',   // 21px
      },
      fontFamily: {
        'averta': ['Averta', 'Open Sans'],
        'gabriela': ['Gabriela', 'serif'],
      },
      colors: {
        's-turquoise': '#5EC4B6',
        's-gold': '#D2B271',
        's-purple': '#312B6E',
        's-turquoise-light': '#D9EEE7',
      },
      backgroundImage: theme => ({
        'blocks': "url('/images/svg/blocks.svg')",
        'stripe': "url('/images/svg/stripe.svg')",
      }),
      zIndex: {
        'minus': '-10',
      },
      scale: {
        '220': '2.2'
      },
      inset: {
        '1/10': '25%',
        '1/11': '-10%',
        '1/13': '-13%',
        '1/24': '-24%',
        '1/20': '-20%',
        '1/5':  '20%',
        '1/15': '15%',
        '6': '6%',
      },
      minWidth: {
        '16': '16rem',
        '32': '32rem',
      },
      transitionProperty: {
        'height': 'height',
      },
      letterSpacing: {
        widest: '.2em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
