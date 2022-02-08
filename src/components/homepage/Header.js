import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ButtonMailTo from '../ui/ButtonMailTo';
import UnsplashCredit from "../UnsplashCredit";
import HeaderQuote from "./HeaderQuote";


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
                <div className="space-y-14 px-6 py-12
                                max-w-screen-lg mx-auto
                                sm:flex sm:flex-row sm:justify-around sm:space-x-14 sm:items-center xl:px-0
                                lg:space-x-20
                                xl:max-w-screen-xl ">
                    <div className="flex flex-col h-auto
                                    text-left space-y-10
                                    max-w-prose container">
                        <h1>{header_title}</h1>
                        <p>{header_subtitle}</p>
                        <ButtonMailTo buttonText={header_button} /> 

                    </div>
                    <div className="max-w-sm lg:max-w-md relative">
                        <GatsbyImage image={image} alt={alt} className="rounded-lg" />
                        <UnsplashCredit 
                            photographer="Gabnrielle Clare Marino" 
                            unsplashName="@gabiontheroad"
                            textColor="text-s-turquoise-light"
                            className="absolute inset-x-1 bottom-2"/>
                    </div>
                </div>
            </div>
            <HeaderQuote quote={quote} />
        </>
    )
}

export default Header;