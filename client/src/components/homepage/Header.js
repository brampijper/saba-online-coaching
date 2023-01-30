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
        <div className="bg-black">
            <div className="max-w-screen-lg flex flex-col space-y-16 px-6 m-auto py-24 
                sm:items-center xl:max-w-screen-2xl xl:px-36 xl:space-y-28">
                
                <HeaderTitle className="max-w-screen-xl"/>

                <div className='flex flex-col md:flex-row gap-16 relative'>
                    <section>
                        <h1 className='text-white text-[1.2rem] leading-[2.2rem] sm:text-[2rem] sm:leading-[3.5rem]'>
                            {header_subtitle}
                        </h1>
                        <ButtonScrollTo scrollToTarget='#about-me' className="text-black rounded-md lg:mt-12" />
                    </section>
                
                <section className='relative'>
                    <GatsbyImage image={image} alt={alt} objectFit="contain" className="max-h-[500px]" />
                    <UnsplashCredit 
                        photographer="Sasha Freemind" 
                        unsplashName="@sashafreemind"
                        textColor="text-white/40"
                        className="absolute -bottom-6 w-full flex justify-center"
                    /> 
                </section>
                </div>
            </div>
        </div>
    )
}

export default Header;