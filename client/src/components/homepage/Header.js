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
            header_subtitle,
            header_image: { 
                localFile, 
                alternativeText: alt 
            } 
        }
    } = data
    const image = getImage(localFile);

    return (
        <div className="bg-black">
            <div className="max-w-screen-lg flex flex-col justify-start px-12 m-auto py-24 
                xl:max-w-screen-2xl lg:grid lg:grid-rows-2 lg:px-0 lg:place-content-center">
                
                <div className="flex justify-center min-h-[10rem]">
                    <HeaderTitle className="max-w-screen-xl absolute left-0 xl:static"/>
                </div>

                <div className='flex flex-col gap-12 lg:flex-row lg:justify-end'>
                    <div className='flex flex-col gap-2
                        lg:grow-0 lg:ml-auto lg:-mt-24 lg:items-end'>
                        <h1 className='text-[1.1rem] text-white leading-[2.2rem] w-full sm:text-lg sm:w-[300px]
                            lg:w-[500px] lg:text-3xl lg:text-right lg:leading-[3rem]'>
                            {header_subtitle}
                        </h1>
                        <ButtonScrollTo scrollToTarget='#about-me' className="float-right text-white" />
                    </div>
                    
                    <div className='ml-auto flex flex-col items-center'>
                        <GatsbyImage image={image} alt={alt} className="lg:top-20 w-full" />
                        <UnsplashCredit 
                            photographer="Sasha Freemind" 
                            unsplashName="@sashafreemind"
                            textColor="text-white/40"
                            className="z-10 mt-12"
                        /> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;