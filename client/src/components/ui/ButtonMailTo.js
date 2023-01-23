import React from 'react';

const ButtonMailTo = ({ email, styles, buttonText }) => {
    return (
        <a  href={'mailto:' + email} className={styles}>
            {buttonText}
        </a>
    )
}

// Set default props
ButtonMailTo.defaultProps = {
    email: "Saba.Feronah@gmail.com",
    buttonText: "Send a message",
    styles: `
        mb-5 mt-5 
        bg-white border rounded border-black 
        max-w-md px-6 py-2.5 
        text-center text-black
        md:max-w-xs
        hover:bg-neutral-900 hover:text-white
        `
  };

export default ButtonMailTo;