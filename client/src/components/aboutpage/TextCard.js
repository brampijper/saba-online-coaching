import React from "react";
import ReactMarkdown from 'react-markdown';

const TextCard = ({ secondaryStyle, markdown, className}) => {
    let cardStyle; 
    //change layout of card
    secondaryStyle  ? cardStyle = 'bg-white border-2 border-s-gold text-black' 
                    : cardStyle = 'bg-s-purple border-0 text-white';
    return (
        <article className={`p-6 md:p-12 rounded-lg text-sm space-y-8 max-w-prose order-2 ${cardStyle}`}>
         <ReactMarkdown children={markdown} className={className} />
    </article>
    )
}

export default TextCard;