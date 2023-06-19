import React from "react";
import ReactMarkdown from 'react-markdown';

const ToolResourceCard = ({resource}) => {
    const { 
        title, 
        description: { data: { description}}
    } = resource


    const cardStyles = {
        Youtube: "bg-white ring ring-red-100 ring-offset-2 ring-offset-red-300 text-black rounded-lg",
        Podcasts: "text-white bg-gradient-to-r from-slate-700 to-slate-800",
        Blogs: "bg-slate-100 text-neutral-900 bg-clip-border border-4 border-slate-400 border-dashed",
        [`App's`]: "bg-blue-600 text-neutral-200 border-blue-900 border-4"
    }
    
    return (
        <article className={`flex flex-col
            rounded p-6 shadow-2xl space-y-4 h-min ${cardStyles[title]}
            md:px-8`
        }>
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