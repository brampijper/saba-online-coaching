import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ReactMarkdown from 'react-markdown';

// make graphql query to retrieve the image / svg for this specific tool.

const ServiceCard = ({tool}) => {
    const { 
        title, 
        id, 
        description: {
             data: { 
                description 
            } 
        },
        image: {
            localFile,
            alternativeText: alt
        } 
    } = tool

    const image = getImage(localFile);

    return ( // actually i want a carousel with cards that are taller. and users can swipe.
        <div className="max-w-lg h-[48rem] rounded-lg bg-white shadow-md overflow-hidden flex flex-col">
                        
            <GatsbyImage 
                image={image}
                alt={alt} 
                objectFit="cover" 
                className="min-w-full max-h-80"  // css for outer wrapper
                imgClassName="" // css for img element
            />

            <section className="p-8 flex flex-col space-y-8">
                <h4 className="word-spacing-wide md:word-spacing-none">
                    {title}
                </h4>

                    
                <ReactMarkdown children={description} />
                    
                {/* // this should link to the specific tool id page.
                    // Would be nice to do tools/{name Of tool}
                */}
                <Link className="underline inline-block" to={`/tools#${id}`}>
                    Read more about {title}
                </Link>
            </section>
                
        </div>
    )
}

export default ServiceCard;