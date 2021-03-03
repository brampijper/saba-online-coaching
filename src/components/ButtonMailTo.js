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

export default ButtonMailTo;