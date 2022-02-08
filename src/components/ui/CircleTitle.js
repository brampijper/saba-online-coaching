import React from 'react';

const circleTitle = ({title, styles }) => {
    return (
        <div className={`
        ${styles}
        h-72 w-72 
        bg-s-purple rounded-full
        flex items-center self-center mx-auto
        lg:h-96 lg:w-96`}>
        <h2 className="text-white text-center word-spacing-wide text-4xl leading-tight lg:text-5xl lg:leading-snug">
            {title}
        </h2>
    </div>
    )
}

export default circleTitle;