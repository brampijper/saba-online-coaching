import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ReactMarkdown from 'react-markdown';

const MAX_CHAR_LENGTH = 250;

const ServiceCard = ({tool, isSelected, isNextItem, isPreviousItem}) => {
    const { 
        title, 
        id, 
        description: {
            data: { description } 
        },
        image: { localFile, alternativeText: alt } 
    } = tool

    const image = getImage(localFile);
    
    //could turn this into a helper funciton (hook)
    const shortDescription = description
        .slice(0, MAX_CHAR_LENGTH)
        .padEnd(MAX_CHAR_LENGTH + 5, '(...)');

    // not the best way.
    const selectedStyles = "opacity-100 scale-100 z-[2] translate-x-[0%]"
    const nextItemStyles = "opacity-30 scale-95 translate-x-[20%] lg:translate-x-1/2 xl:translate-x-[70%]"
    const previousItemStyles = "opacity-30 scale-95 translate-x-[-20%] lg:translate-x-[-50%] xl:translate-x-[-70%]"
   
    return (
        <div className={ // make this more readable. + add border for selected item.
            [
                'absolute flex flex-col h-auto opacity-0 max-w-lg',
                'rounded-lg bg-white shadow-md ',
                'transition-all duration-500 ease-in-out will-change-transform',
                isSelected ? selectedStyles : '',
                isNextItem ? nextItemStyles : '',
                isPreviousItem ? previousItemStyles : '',
            ].join(' ')
        }>
                        
            <GatsbyImage 
                image={image}
                alt={alt} 
                objectFit="cover" 
                className="min-w-full max-h-52 sm:max-h-80"  // css for outer wrapper
                imgClassName="" // css for img element
            />

            <section className="p-6 flex flex-col space-y-4 mr-2 md:space-y-8">
                <h4>
                    {title}
                </h4>

                <ReactMarkdown children={shortDescription} />
                    
                <Link className="underline inline-block" to={`/tools#${id}`}>
                    Read more about {title}
                </Link>
            </section>
                
        </div>
    )
}

export default ServiceCard;