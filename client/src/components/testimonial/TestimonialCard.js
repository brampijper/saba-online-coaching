import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import UnsplashCredit from '../UnsplashCredit';

const TestimonialCard = ({card}) => {
    const { testimonal_image, description } = card;
    const image = getImage(testimonal_image.localFile);
    return (
        <div>
            <div className="w-full h-auto rounded-lg border-opacity-90 border-4 border-s-gold bg-white shadow-md overflow-hidden pb-8 sm:w-4/5 sm:mx-auto md:pb-12 lg:pb-0">
                <article className="space-y-4 lg:space-y-6 flex flex-col lg:flex-row">

                    <div className="relative lg:min-w-16">  
                        <GatsbyImage image={image} alt="should be dynamic" className="max-h-96 lg:max-h-full lg:h-full" />
                        
                        <div className="
                            absolute flex flex-col bottom-0 w-full 
                            py-2 px-8 
                            text-white text-left bg-s-gold bg-opacity-80
                            md:px-12 lg:bottom-0 lg:px-0 lg:text-center
                        ">
                            <div>
                                <span className="text-base font-bold">
                                    {card.name}{' '}
                                </span>
                                <span className="text-xs">{card.workplace}</span>
                            </div>
                            <div className="">
                                <UnsplashCredit 
                                    unsplashName={card.imageUnsplashName}
                                    photographer={card.imagePhotographer}
                                    textColor="slate-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-prose mx-8 md:mx-12 lg:pb-8">
                        <h4 className="">{card.title}</h4>
                        <p>{description.data.description}</p>                                
                        <Link className="underline block" to='/testimonials'>Read more</Link>
                    </div>
                </article> 
            </div>
        </div>
    )
}

export default TestimonialCard;