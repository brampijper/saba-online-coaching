import React from 'react';
import { Link } from "gatsby";
import ReactMarkdown from 'react-markdown';
import useShortText from '../hooks/useShortText';

const ToolCarouselCard = ({item, cardStyles = ""}) => {
    const { 
        title,
        slug,
        description: {
            data: { description } 
        },
        image: { localFile: { publicURL }, alternativeText: alt } 
    } = item

    const shortDescription = useShortText(description);

    return (
        <div className={`flex flex-col h-auto max-w-lg rounded-lg bg-white shadow-md overflow-hidden shadow-xl
            ${cardStyles}
        `}>                
            <img 
                src={publicURL}
                alt={alt} 
                className="min-w-full max-h-52 sm:max-h-80 object-cover"  // css for outer wrapper
            />

            <section className="p-6 flex flex-col space-y-4 mr-2 md:space-y-8">
                <h4>
                    {title}
                </h4>

                <ReactMarkdown
                    className=""
                    children={shortDescription} 
                />
                    
                <Link className="underline inline-block" to={`/${slug}`}>
                    Read more about {title}
                </Link>
            </section>
                
        </div>
    )
}

export default ToolCarouselCard;