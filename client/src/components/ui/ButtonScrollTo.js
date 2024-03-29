import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

function ButtonScrollTo({scrollToTarget, buttonText, styles, className}) {
    return (
        <button 
            className={styles + className}
            onClick={ () => scrollTo(`${scrollToTarget}`)} 
        >
            {buttonText}
        </button>
    )
}

// Set default props
ButtonScrollTo.defaultProps = {
    buttonText: "Explore",
    styles: `
        mb-5 mt-5 w-full h-12 text-sm
        font-bold md:w-64 md:h-16
        hover:bg-white hover:text-black 
    `
  };

export default ButtonScrollTo