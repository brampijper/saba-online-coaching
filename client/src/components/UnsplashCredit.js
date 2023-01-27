import React from 'react';

const UnsplashCredit = ({textColor, className, photographer, unsplashName}) => {
    const url = `https://unsplash.com/${unsplashName}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
    return (
        <div className={`text-xss font-averta ${textColor} ${className}`}>
            Photo by
            <a href={url} target="_blank" rel="noreferrer">{`\xa0${photographer}\xa0`}</a>
            on
            <a href={url} target="_blank" rel="noreferrer">{`\xa0Unslpash`}</a>
        </div>
    )
}

export default UnsplashCredit;

