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
        <div className="bg-s-purple viewport-height-mobile  ">
            <div className="h-full flex flex-col items-center px-6 pb-14
                sm:py-0 sm:pt-0 sm:justify-start 
                md:m-auto
                xl:px-12
                max-w-screen-sm md:max-w-screen-md xl:max-w-screen-lg
            ">
                <div className="w-full min-w-screen-sm md:min-w-screen-md xl:min-w-screen-lg border-r">
                    <HeaderTitle className=""/>
                </div>

                <div className='
                  grid grid-cols-1 content-evenly h-full text-center border-l border-t 
                  md:relative md:content-start md:grid-cols-2 md:justify-start md:h-full md:gap-12 
                  xl:pb-16
                '>
                    
                    <h1 className='text-white text-base max-w-prose 
                        md:text-left md:text-sm md:mb-6 md:h-min
                        xl:text-lg
                    '>
                        {header_subtitle}
                    </h1>

                    <ButtonScrollTo 
                      scrollToTarget='#about-me' 
                      className="text-black bg-s-turquoise order-last rounded-none 
                        md:m-0 md:col-span-1" />

                    <section className='relative bg-s-turquoise md:col-span-1 md:row-span-2'>
                        <GatsbyImage 
                          image={image}
                          alt={alt} 
                          objectFit="cover" 
                          className="max-w-xs md:max-w-md" 
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