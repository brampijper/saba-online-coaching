import React from 'react';
import ArrowBounceDown from '../ui/ArrowBounceDown';

const HeaderQuote = ({quote}) => {
    return (
        <>
            <div className="px-6 mx-auto text-center md:max-w-4xl">
                <h3 className="leading-relaxed lg:leading-loose">
                    <span className="text-3xl mx-1 md:text-5xl font-gabriela">
                        "{quote}"
                    </span>
                </h3>
            </div>
            <ArrowBounceDown scrollToTarget='#about-me' />
        </>
    )
}

export default HeaderQuote;