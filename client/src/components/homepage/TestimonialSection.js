import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import TestimonialCard from "../testimonial/TestimonialCard";
import { Stripes } from "../svg/Stripes";

const TestimonialSection = () => {
    const { strapiHomepage } = useStaticQuery(graphql`
    query {
        strapiHomepage {
            testimonal_title
            testimonal_subtitle
            testimonals {
                id
                description {
                    data {
                        description
                    }
                }
                name
                function
                workplace
                imagePhotographer
                imageUnsplashName
                testimonal_image {
                    localFile {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                            )
                        }
                    }
                }
            }
        }
    }`)

    const { testimonial_title, testimonial_subtitle, testimonals } = strapiHomepage; 

    return (
        <div className="h-auto pb-20 lg:pb-40 relative">    
            <div className="h-auto max-w-screen-lg md:mt-96 xl:max-w-screen-xl mx-auto px-6">
                <h2 className="text-center pt-20">
                    {testimonial_title}
                </h2>
                <p className="text-center max-w-lg mx-auto mt-10">
                    {testimonial_subtitle}
                </p>
                <div className="card-container grid grid-flow-row gap-12 place-content-center mt-16 md:mt-32 lg:grid-cols-1 lg:gap-20">
                    {
                        testimonals.map( card => (
                            <TestimonialCard 
                                key={card.id}
                                card={card}
                            />       
                        ))
                    }
                </div> 
            </div>
            <Stripes className="w-full h-full absolute top-1/13 sm:top-0 md:top-0 xl:scale-x-220 z-minus" />
        </div>
    )
}

export default TestimonialSection;