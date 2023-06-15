import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ReactMarkdown from 'react-markdown';
import useShortText from '../hooks/useShortText';

const ToolCard = ({item, cardStyles = ""}) => {
    const { 
        title,
        slug,
        description: {
            data: { description } 
        },
        image: { localFile, alternativeText: alt } 
    } = item

    const image = getImage(localFile);

    const shorterText = useShortText(description);

    return (
        <div className={`flex flex-col h-auto max-w-lg rounded-lg bg-white shadow-md overflow-hidden
            ${cardStyles}
        `}>                
            <GatsbyImage 
                image={image}
                alt={alt} 
                objectFit="cover" 
                className="min-w-full max-h-52 sm:max-h-80"  // css for outer wrapper
            />

            <section className="p-6 flex flex-col space-y-4 mr-2 md:space-y-8">
                <h4>
                    {title}
                </h4>

                <ReactMarkdown children={shorterText} />
                    
                <Link className="underline inline-block" to={`/${slug}`}>
                    Read more about {title}
                </Link>
            </section>
                
        </div>
    )
}

export default ToolCard;