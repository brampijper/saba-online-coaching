import React from 'react';

const ButtonMailTo = ({ email, styles, children }) => {

    return (
            <a  href={'mailto:' + email}
                className={styles}
            >
                {children}
            </a>
    )
}

// Set default props
ButtonMailTo.defaultProps = {
    email: "kakkava.sofia@gmail.com",
    children: "Send a message",
    styles: `
        mb-5 mt-5 
        bg-white border-2 rounded border-black 
        max-w-md px-6 py-2.5 
        text-center
        md:max-w-xs
        `
  };

export default ButtonMailTo;