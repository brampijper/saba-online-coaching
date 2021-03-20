import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MarkdownView from 'react-showdown';

import Stripe from "../images/svg/stripe.svg";
import Squares from "../images/svg/squares.svg";



const getData = graphql`
query GetAboutMeContent {
    strapiHomepage {
        aboutme_title
        aboutme_text
        aboutme_image_text
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

const AboutMe = () => {
    const data = useStaticQuery(getData);
    const {
        strapiHomepage: {
            aboutme_title, aboutme_text, aboutme_image_text, 
            aboutme_image: {
                localFile,
                alternativeText: alt
            }
        }
    } = data;
    const image = getImage(localFile);

    return (
        <div className="relative overflow-hidden md:overflow-visible">
            <div className="h-auto space-y-52 max-w-screen-lg xl:max-w-screen-xl mx-auto" id="about-me">

                    <div className="
                        h-72 w-72 
                        bg-s-purple rounded-full
                        flex items-center self-center mx-auto
                        lg:h-96 lg:w-96
                    ">
                        <h2 className="text-white text-center word-spacing-wide">{aboutme_title}</h2>
                    </div>

                    <div className="
                        space-y-6 px-6 pb-8 h-auto
                        sm:space-y-0 sm:grid sm:grid-cols-2 sm:space-x-14
                        ">
                        
                        <div>
                            <MarkdownView markdown={aboutme_text} className="space-y-6 max-w-prose pb-4" />
                            {/* <Link className="underline" to='/about'>Read more</Link> */}
                        </div>

                        <div className="space-y-6 place-self-center">
                            <GatsbyImage image={image} alt={alt} className="rounded-lg" />
                            <MarkdownView markdown={aboutme_image_text} className="space-y-2 max-w-prose" />
                        </div>
                    </div>
            </div>
            <div className="flex justify-center">
                <Squares className="absolute z-minus top-1/15 md:top-0 w-full h-auto max-w-screen-xl" />
            </div>
            <Stripe className="absolute z-minus top-1/4 md:top-1/3 w-auto h-full lg:w-full lg:h-auto" />
        </div>
    )
}

export default AboutMe