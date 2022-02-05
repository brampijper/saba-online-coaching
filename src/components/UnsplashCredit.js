import React from 'react';

const UnsplashCredit = ({textColor, className, photographer}) => {
    const url = `https://unsplash.com/${props.unsplashName}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
    return (
        <div className={`text-xss text-black font-averta ${textColor} ${className}`}>
            Photo by 
            {' '}
            <a href={url} target="_blank" rel="noreferrer">{photographer}</a>
            {' '}
            on
            {' '}
            <a href={url} target="_blank" rel="noreferrer">Unsplash</a>
        </div>
    )
}

export default UnsplashCredit;

