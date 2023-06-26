module.exports = {
  content: [
    './src/components/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}',
    './src/styles/**/*.{js,jsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {      
      fontSize: {
        'xss': '0.65rem',
        'xs': '0.85rem',  // 14px
        'base': '1.125rem',   // 18px
        'sm': '1.375rem',
        'md': '1.5rem',
        'lg': '1.775rem',
        'xl': '2rem',
        '2xl': '2.225rem',
        '3xl': '2.5rem',
        '4xl': '2.75rem',
        '5xl': '3.0rem',
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
      zIndex: {
        'minus': '-10',
      },
      scale: {
        '220': '2.2',
        '300': '3',
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
      },
      borderRadius: {
        'half': '6rem'
      },
      height: {
        '100-4': 'calc(100vh - 4rem)', // minus mobile navb height
        '100-6': 'calc(100vh - 6rem)' // minus desktop nav height
      },
      maxHeight: {
        '125': '31.5rem'
      },
      lineHeight: {
        'extra-loose': '5.5rem'
      }
    },
  },
  plugins: [],
}
