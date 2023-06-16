import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import ButtonMailTo from '../ui/ButtonMailTo';
import UnsplashCredit from '../UnsplashCredit';

const getData = graphql`
query GetHelpSectionContent {
    strapiHomepage {
        helpsection_title
        helpsection_description {
            data {
                helpsection_description
            }
        }
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
            helpsection_title, helpsection_button,
            helpsection_description: {
                data: {
                    helpsection_description
                }
            },
            helpsection_image: { 
                localFile, 
                alternativeText: alt 
            } 
        }
    } = data
    const image = getImage(localFile);
    return (
        <div className="bg-s-turquoise-light h-auto p-12 grid md:grid-cols-2 md:grid-rows-[5rem] md:gap-x-12 lg:p-28 lg:min-h-[20rem]">

                <h2 className="text-4xl order-1 mb-8 lg:mb-0 md:col-start-2 md:row-start-1 lg:justify-self-start">
                    {helpsection_title}
                </h2>
                
                <div className="flex flex-col order-3 mt-8 lg:justify-self-start">
                    <ReactMarkdown 
                        children={helpsection_description} 
                        className="space-y-6 max-w-lg text-base" 
                    />                    
                    <ButtonMailTo buttonText={helpsection_button} /> 
                </div>
                
                <div className="relative order-2 md:row-start-1 md:row-end-3 lg:justify-self-end">
                    <GatsbyImage 
                        image={image} 
                        alt={alt} 
                        className="max-w-2xl h-full rounded-lg" 
                    />
                    <UnsplashCredit 
                        photographer="Matthew Waring" 
                        unsplashName="@matthewwaring"
                        textColor="text-black"
                        className="absolute inset-x-2 bottom-2"
                    />  
                </div>
        </div>
    )
}

export default HelpSection;  