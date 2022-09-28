import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import MarkdownView from 'react-showdown';

import ButtonMailTo from '../ui/ButtonMailTo';
import UnsplashCredit from '../UnsplashCredit';

const getData = graphql`
query GetHelpSectionContent {
    strapiHomepage {
        helpsection_title
        helpsection_description
        helpsection_button
        helpsection_image {
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

const HelpSection = () => {
    const data = useStaticQuery(getData);
    const {
        strapiHomepage: {
            helpsection_title, helpsection_description, helpsection_button,
            helpsection_image: { 
                localFile, 
                alternativeText: alt 
            } 
        }
    } = data
    const image = getImage(localFile);
    return (
        <>
        <div className="bg-s-turquoise-light h-auto py-10">
            <div className="
                flex flex-col space-y-12 h-auto max-w-screen-lg xl:max-w-screen-xl mx-auto px-6
                md:flex-row md:gap-20 md:space-y-0
                ">
                
                <div className="flex flex-col space-y-10 md:order-last md:justify-center">
                    <h2>{helpsection_title}</h2>
                    <MarkdownView markdown={helpsection_description} className="space-y-2 max-w-prose" />                    
                    <ButtonMailTo buttonText={helpsection_button} /> 
                </div>
                <div className="relative">
                    <GatsbyImage image={image} alt={alt} className="md:order-first max-w-xs lg:max-w-lg mx-auto mt-8 md:mt-0 relative" />
                    <UnsplashCredit 
                        photographer="Gabnrielle Clare Marino" 
                        unsplashName="@gabiontheroad"
                        textColor="text-s-turquoise-light"
                        className="absolute inset-x-1 bottom-2"
                    />  
                </div>
            </div>
        </div>

        </>
    )
}

export default HelpSection;