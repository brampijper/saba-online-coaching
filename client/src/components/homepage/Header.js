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
        <div className="bg-s-purple h-100-4 lg:h-100-6 overflow-hidden">
            <div className="h-full flex flex-col items-center px-6
                sm:py-0 sm:pt-0 sm:justify-start sm:m-auto
                xl:px-12
                max-w-screen-sm md:max-w-screen-md xl:max-w-screen-lg
            ">
                <div className="w-full min-w-screen-sm md:min-w-screen-md xl:min-w-screen-lg border-r">
                    <HeaderTitle/>
                </div>

                <div className='
                  grid grid-cols-1 content-evenly h-full text-center border-l border-t 
                  md:relative md:content-start md:grid-cols-2 md:grid-rows-2 md:justify-start md:h-5/6
                '>
                    
                    <h1 className='text-white text-base
                        md:text-left md:text-sm md:col-start-1 md:row-start-1 md:p-8
                        xl:text-lg
                    '>
                        {header_subtitle}
                    </h1>

                    <ButtonScrollTo 
                      scrollToTarget='#about-me' 
                      className="text-black bg-s-turquoise order-last rounded-none
                        md:col-start-1 md:row-start-1 md:row-end-2 md:self-end md:w-full md:m-0 md:h-20" />

                    <section className='md:bg-s-turquoise md:col-span-1 md:row-span-2'>
                        <GatsbyImage 
                          image={image}
                          alt={alt} 
                          objectFit="cover" 
                          className="max-h-72 max-w-xs md:max-w-md md:max-h-full md:h-5/6" 
                        />

                        <UnsplashCredit 
                            photographer="Sasha Freemind" 
                            unsplashName="@sashafreemind"
                            textColor="text-black"
                            className="w-full flex mt-2 justify-center"
                        /> 
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Header;