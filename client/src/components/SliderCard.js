import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ReactMarkdown from 'react-markdown';
import useShortText from './hooks/useShortText';

const ServiceCard = ({tool, isSelected, isPrevious, isNext, position = "absolute"}) => {
    const { 
        title,
        slug,
        description: {
            data: { description } 
        },
        image: { localFile, alternativeText: alt } 
    } = tool

    const image = getImage(localFile);

    const shorterText = useShortText(description)

    const sliderCardStyles = {
        base: "absolute opacity-0",
        selected: "opacity-100 scale-100 z-[2] translate-x-[0%]",
        next: "opacity-30 scale-95 translate-x-[20%] lg:translate-x-1/2 xl:translate-x-[70%]",
        previous: "opacity-30 scale-95 translate-x-[-20%] lg:translate-x-[-50%] xl:translate-x-[-70%]"
    }
   
    return (
        <div className={`
            flex flex-col h-auto max-w-lg rounded-lg bg-white shadow-md
            transition-all duration-500 ease-in-out will-change-transform
            ${ position === 'absolute' ? sliderCardStyles.base : `opacity-100 ${position}` }
            ${ isSelected ? sliderCardStyles.selected : "" }
            ${ isNext ? sliderCardStyles.next : "" }
            ${ isPrevious ? sliderCardStyles.previous : "" }
        `}>
                        
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

                <ReactMarkdown children={shorterText} />
                    
                <Link className="underline inline-block" to={`/${slug}`}>
                    Read more about {title}
                </Link>
            </section>
                
        </div>
    )
}

export default ServiceCard;