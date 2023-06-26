import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';

import CircleTitle from '../ui/CircleTitle';
import UnsplashCredit from "../UnsplashCredit";
import { GreenStripe } from '../svg/GreenStripe';
import { Squares } from '../svg/Squares';

const getData = graphql`
query GetAboutMeContent {
    strapiHomepage {
        aboutme_title
        aboutme_text {
            data {
                aboutme_text
            }
        }
        aboutme_image_text {
            data {
                aboutme_image_text
            }
        }
        aboutme_image {
            alternativeText
            localFile {
                childImageSharp {
                    gatsbyImageData (
                        placeholder: BLURRED
                    )
                }
            } 
        }
    }
}
`

const ResourceSection = () => {
    const data = useStaticQuery(getData);
    const {
        strapiHomepage: {
            aboutme_title,
            aboutme_image_text: {
                data: {
                    aboutme_image_text
                }
            },
            aboutme_text: {
                data: {
                    aboutme_text
                }
            },
            aboutme_image: {
                localFile,
                alternativeText: alt
            }
        }
    } = data;
    const image = getImage(localFile);

    return (
        <div className="relative w-full h-auto flex flex-col overflow-hidden">
            <article id="about-me" className="h-auto max-w-5xl space-y-20 mx-auto px-6 relative pb-8 lg:pb-32
                md:grid md:grid-cols-2 md:gap-x-8 md:space-y-28
            ">
                <CircleTitle title={aboutme_title} styles="col-span-2" />  
                
                <ReactMarkdown 
                    className="space-y-6 max-w-prose pb-4" 
                    linkTarget="_blank"
                    children={aboutme_text} 
                />

                <div className="place-self-center">
                    <GatsbyImage 
                        image={image} 
                        alt={alt}
                        objectFit="cover"
                        className="rounded-lg self-center max-h-80" 
                    />
                    
                    <UnsplashCredit 
                        photographer="Moritz Kindler" 
                        unsplashName="@moritz_photography"
                        className="mt-0 text-center" 
                    />  

                    <ReactMarkdown 
                        children={aboutme_image_text} 
                        className="space-y-2 max-w-prose mt-8" 
                    />
                </div>
                
                <GreenStripe className="absolute z-minus top-1/4 md:row-start-2 md:-top-1/5 left-0 h-auto w-auto md:scale-x-300" />

            </article>
            <Squares className="absolute -z-[9] top-1/15 sm:top-0 w-full self-center h-auto max-w-screen-lg" />
        </div>

    )
}

export default ResourceSection