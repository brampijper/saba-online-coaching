import React from "react";
import MarkdownView from 'react-showdown';

const TextCard = (props) => {
    let cardStyle; 
    //change layout of card
    props.alt   ? cardStyle = 'bg-white border-2 border-s-gold text-black' 
                : cardStyle = 'bg-s-purple border-0 text-white';
    return (
        <article className={`p-6 md:p-12 rounded-lg text-sm space-y-8 max-w-prose order-2 ${cardStyle}`}>
        <MarkdownView markdown={props.markdown} className={props.className} />
    </article>
    )
}

export default TextCard;