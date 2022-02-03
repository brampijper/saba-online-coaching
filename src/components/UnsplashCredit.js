import React from 'react';

const UnsplashCredit = (props) => {
    const url = `https://unsplash.com/${props.unsplashName}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
    return (
        <div className={`absolute inset-x-1 bottom-2 text-xs text-black font-averta text-${props.textColor}`}>
            By 
            {' '}
            <a href={url} target="_blank" rel="noreferrer">{props.photographer}</a>
            {' '}
            on
            {' '}
            <a href={url} target="_blank" rel="noreferrer">Unsplash</a>
        </div>
    )
}

export default UnsplashCredit;

