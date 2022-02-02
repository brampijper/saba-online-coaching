import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

import ButtonMailTo from '../ButtonMailTo';
import ArrowDown from "../../images/svg/arrow-down.svg";
import UnsplashCredit from "../UnsplashCredit";


const getData = graphql`
query GetHeaderContent {
    strapiHomepage {
        header_title
        header_subtitle
        header_button
        quote
        header_image {
            alternativeText
            localFile {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    width: 600
                )
            }
        }
      }
    }
  }  
`

const Header = () => {
    const data = useStaticQuery(getData);
    const {
        strapiHomepage: {
            header_title, header_subtitle, header_button, quote,
            header_image: { 
                localFile, 
                alternativeText: alt 
            } 
        }
    } = data
    const image = getImage(localFile);

    return (
        <>
            <div className="bg-s-turquoise-light h-auto">

                <div className="
                    space-y-14 px-6 py-12
                    max-w-screen-lg mx-auto
                    sm:flex sm:flex-row sm:justify-around sm:space-x-14 sm:items-center xl:px-0
                    lg:space-x-20
                    xl:max-w-screen-xl 
                    ">

                    <div className="
                        flex flex-col h-auto
                        text-left
                        space-y-10
                        max-w-prose
                        container
                        "
                    >
                        <h1>{header_title}</h1>
                        <p>{header_subtitle}</p>

                        <ButtonMailTo> 
                            <span>{header_button}</span>
                        </ButtonMailTo>

                    </div>

                    <div className="max-w-sm lg:max-w-md relative">
                        <GatsbyImage image={image} alt={alt} className="rounded-lg" />
                        <UnsplashCredit 
                            photographer="Gabnrielle Clare Marino" 
                            unsplashName="@gabiontheroad"
                            textColor="s-turquoise-light"
                        />
                    </div>
                </div>

            </div>

            <div className="container mx-auto">
                <div className="px-6 my-20 flex space-x-3 md:max-w-4xl mx-auto">
                    <h3 className="relative m-auto text-center">
                        <span className="font-extrabold	text-3xl mx-1 md:text-5xl font-bold font-gabriela">"</span>
                        {quote}
                        <span className="font-extrabold	text-3xl mx-1 md:text-5xl font-bold font-gabriela">"</span>
                    </h3>
                </div>
                
                <ArrowDown className="h-28 mx-auto cursor-pointer animate-bounce" onClick={ () => scrollTo('#about-me')} />
            </div>

        </>
    )
}

export default Header;