import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ButtonMailTo from '../ui/ButtonMailTo';
import UnsplashCredit from "../UnsplashCredit";

const getData = graphql`
query GetHeaderContent {
    strapiHomepage {
        header_title
        header_subtitle
        header_button
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
            header_title, header_subtitle, header_button,
            header_image: { 
                localFile, 
                alternativeText: alt 
            } 
        }
    } = data
    const image = getImage(localFile);

    return (
        <div className="bg-s-turquoise-light h-auto">
            <div className="flex flex-col px-6 py-12 space-y-14 mx-auto
                            md:max-w-screen-lg md:flex-row md:justify-evenly md:space-y-0 md:gap-8
                            xl:max-w-screen-xl">

                <div className="flex flex-col space-y-6 container justify-start md:max-w-lg xl:max-w-xl">
                    <h1>{header_title}</h1>
                    <p>{header_subtitle}</p>
                    <ButtonMailTo buttonText={header_button} /> 
                </div>
                
                <div className="relative max-w-sm md:max-w-md">
                    <GatsbyImage image={image} alt={alt} className="rounded-lg" />
                    <UnsplashCredit 
                        photographer="Gabnrielle Clare Marino" 
                        unsplashName="@gabiontheroad"
                        textColor="text-s-turquoise-light"
                        className="absolute inset-x-1 bottom-2"/>
                </div>
            </div>
        </div>
    )
}

export default Header;