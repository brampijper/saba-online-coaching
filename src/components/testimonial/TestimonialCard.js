import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const TestimonialCard = ({card}) => {
    const image = getImage(card.image.localFile);

    return (
        <>
            <div key={card.id} className="w-full h-auto rounded-lg border-opacity-90 border-4 border-s-gold bg-white shadow-md overflow-hidden pb-8 sm:w-4/5 sm:mx-auto md:pb-12 lg:pb-0">
                <article className="space-y-8 sm:space-y-4 md:space-y-10 flex flex-col lg:flex-row">

                    <div className="relative lg:min-w-16">  
                        <GatsbyImage image={image} alt="should be dynamic" className="max-h-96 lg:max-h-full lg:h-full" />
                        <div className="absolute bottom-1.5 w-full py-2 px-8 text-white text-left bg-s-gold bg-opacity-80 md:px-12 lg:bottom-0 lg:px-0 lg:text-center">
                            <h5 className="text-base">
                                {card.name}
                            </h5>
                            <span className="text-xs">{card.workplace}</span>
                        </div>
                    </div>

                <div className="max-w-prose mx-8 space-y-4 md:mx-12 md:space-y-6 lg:pb-8">
                    <h4 className="">{card.title}</h4>
                    <p>{card.description}</p>                                
                    {/* <Link className="underline block" to='/testimonials'>Read more</Link> */}
                </div>

                </article> 
            </div>
        </>
    )
}

export default TestimonialCard;