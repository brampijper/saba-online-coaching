import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import UnsplashCredit from '../UnsplashCredit';
import { HeaderTitle } from '../svg/HeaderTitle'
import ButtonScrollTo from '../ui/ButtonScrollTo';

const getData = graphql`
query GetHeaderContent {
    strapiHomepage {
        header_subtitle
        header_image {
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

const Header = () => {
    const data = useStaticQuery(getData);
    const {
        strapiHomepage: {
            header_subtitle,
            header_image: { 
                localFile, 
                alternativeText: alt 
            } 
        }
    } = data
    const image = getImage(localFile);

    return (
        <div className="bg-black viewport-height-mobile sm:viewport-height">
            <div className="h-full flex flex-col items-center max-w-screen-lg px-6 pb-14
                sm:py-16 sm:justify-start 
                md:space-y-24 md:m-auto md:pt-0
                xl:max-w-screen-2xl xl:px-36 xl:space-y-28">
                
                <HeaderTitle className="max-w-screen-sm lg:max-w-screen-md"/>

                <div className='
                  flex flex-col justify-evenly h-full text-center 
                  sm:max-w-sm
                  md:relative md:justify-start md:max-w-screen-lg md:h-auto'
                >
                    
                    <h1 className='text-white text-base max-w-prose 
                      md:w-1/2 md:text-left md:text-sm md:mb-6
                    '>
                        {header_subtitle}
                    </h1>

                    <ButtonScrollTo 
                      scrollToTarget='#about-me' 
                      className="text-white order-last md:order-none md:self-start" />

                    <section className='relative md:absolute md:max-w-sm md:right-0 md:top-0'>
                        <GatsbyImage 
                          image={image}
                          alt={alt} 
                          objectFit="contain" 
                          className="max-h-72 sm:max-h-96 md:max-w-lg md:max-h-full" 
                        />

                        <UnsplashCredit 
                            photographer="Sasha Freemind" 
                            unsplashName="@sashafreemind"
                            textColor="text-white"
                            className="absolute -bottom-6 w-full flex justify-center"
                        /> 
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Header;