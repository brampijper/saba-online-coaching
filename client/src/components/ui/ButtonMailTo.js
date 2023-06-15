import React from 'react';

const ButtonMailTo = ({ email, styles, buttonText, customStyle }) => {
    return (
        <a  href={'mailto:' + email} className={customStyle + styles}>
            {buttonText}
        </a>
    )
}

// Set default props
ButtonMailTo.defaultProps = {
    email: "Saba.Feronah@gmail.com",
    buttonText: "Send a message",
    styles: `mb-5 mt-5 w-fit
        hover:bg-neutral-100 hover:text-black 
        `
  };

export default ButtonMailTo;