import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import MarkdownView from 'react-showdown';

import Stripe from "../images/svg/stripe.svg";
import GoldenSquare1 from "../images/svg/square-gold1.svg";
import GoldenSquare2 from "../images/svg/square-gold2.svg";
import BlueSquare from "../images/svg/square-blue.svg";



const getData = graphql`
query GetAboutMeContent {
    strapiAbout {
        title
        text
        imagetext
        image {
            alternativeText
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
`

const AboutMe = () => {
    const data = useStaticQuery(getData);
    const {
        strapiAbout: {
            title, text, imagetext, 
            image: {
                localFile,
                alternativeText: alt
            }
        }
    } = data;
    const image = getImage(localFile);

    return (
        <div className="relative">
            <div className="h-auto space-y-52 max-w-screen-lg xl:max-w-screen-xl mx-auto" id="about-me">

                    <div className="
                        h-72 w-72 
                        bg-s-purple rounded-full
                        flex items-center self-center mx-auto
                        lg:h-96 lg:w-96
                    ">
                        <h2 className="text-white text-center word-spacing-wide">{title}</h2>
                    </div>

                    <div className="
                        space-y-6 px-6 pb-8 h-auto
                        sm:space-y-0 sm:grid sm:grid-cols-2 sm:space-x-14
                        ">
                        
                        <div>
                            <MarkdownView markdown={text} className="space-y-6 max-w-prose pb-4" />
                            <Link className="underline" to='/about'>Read more</Link>
                        </div>

                        <div className="space-y-6 place-self-center">
                            <GatsbyImage image={image} alt={alt} className="rounded-lg" />
                            <MarkdownView markdown={imagetext} className="space-y-2 max-w-prose" />
                        </div>
                    </div>
            </div>

                <GoldenSquare1 className="absolute -z-10 left-5 top-px hidden md:block md:-left-20 xl:left-40" />
                <GoldenSquare2 className="absolute -z-10 right-10 top-0 hidden md:block xl:right-40" />
                <BlueSquare className="absolute -z-10 left-1/3 top-1/3" />
                <Stripe className="absolute top-1/10 -z-10 w-screen h-full" />
        </div>
    )
}

export default AboutMe