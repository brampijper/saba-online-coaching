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
        bg-slate-700/10 px-1 py-1 rounded-md text-black hover:bg-slate-700/20 
    `
  };

export default ButtonMailTo;