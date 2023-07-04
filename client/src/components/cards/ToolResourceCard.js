import React from "react";
import ReactMarkdown from 'react-markdown';

const ToolResourceCard = ({resource}) => {
    const { 
        title, 
        description: { data: { description}}
    } = resource

    const cardStyles = {
        Youtube: "rounded-lg",
        Podcasts: "",
        Blogs: "",
        [`App's`]: ""
    }
    
    return (
        <article 
            className={`flex flex-col
            rounded p-6 shadow-2xl space-y-4 h-min
            text-neutral-900 bg-gradient-to-r from-zinc-50 to-zinc-100
            ${cardStyles[title]}
            md:px-8`}
        >
            <h4 className={`decoration-4 text-md align-text-bottom`}>
                {title}
            </h4>

            <ReactMarkdown 
                className={`space-y-6 max-w-prose pb-4`}
                linkTarget="_blank"
                children={description} 
            />
        </article>
    )
}

export default ToolResourceCard