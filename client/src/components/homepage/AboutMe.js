import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MarkdownView from 'react-showdown';

import CircleTitle from '../ui/CircleTitle';
import Stripe from "../../images/svg/stripe.svg";
import Squares from "../../images/svg/squares.svg";
import UnsplashCredit from "../UnsplashCredit";

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
            <div  id="about-me" 
                className="h-auto space-y-20 max-w-screen-lg xl:max-w-screen-xl mx-auto
                            px-6 pb-8 mx-auto md:grid md:grid-cols-2 md:gap-8 md:space-y-40">
                <CircleTitle title={aboutme_title} styles="col-span-2" />  
                <div>
                    <MarkdownView markdown={aboutme_text} className="space-y-6 max-w-prose pb-4" />
                    <Link className="underline" to='/about'>
                        Read more about Saba Feronah
                    </Link>
                </div>

                <div className="space-y-6 place-self-center">
                    <div className="relative">
                        <GatsbyImage image={image} alt={alt} className="rounded-lg max-w-sm self-center" />
                        <UnsplashCredit 
                            photographer="Gabnrielle Clare Marino" 
                            unsplashName="@gabiontheroad"
                            className="absolute inset-x-1 bottom-2" />  
                    </div>
                    <MarkdownView markdown={aboutme_image_text} className="space-y-2 max-w-prose md:w-2/3" />
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