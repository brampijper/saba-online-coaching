import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';

import UnsplashCredit from '../UnsplashCredit';
import { HeaderTitle } from '../svg/HeaderTitle'
import ButtonScrollTo from '../ui/ButtonScrollTo';

const getData = graphql`
query GetHeaderContent {
    strapiHomepage {
        header_subtitle {
            data {
                header_subtitle
            }
        }
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
            header_subtitle: {
                data: {
                    header_subtitle
                }
            },
            header_image: { 
                localFile, 
                alternativeText: alt 
            } 
        }
    } = data
    const image = getImage(localFile);

    return (
        <div className="bg-s-purple h-100-6">
            
            <div className="
                h-full grid grid-cols-1 grid-auto-rows px-6 max-w-screen-sm m-auto
                sm:py-8 
                md:p-0 md:grid md:grid-cols-2 md:grid-rows-auto md:max-w-screen-md
                xl:px-8 xl:max-w-screen-lg
            ">
                <div className="
                    w-full min-w-screen-sm border-none
                    md:h-full md:flex md:justify-center md:m-auto md:col-start-1 md:col-end-3 md:row-start-1
                    md:border-solid md:border-r-2 md:border-b-2 md:border-white
                    
                ">
                    <HeaderTitle className="md:self-end md:max-w-[768px] xl:max-w-[868px]" fill={'#5EC4B6'}/>
                </div>
                    
                <ReactMarkdown 
                    children={header_subtitle} 
                    className="
                        text-white flex flex-col gap-4 py-6
                        md:gap-8 md:text-left md:text-sm
                        md:col-start-1 md:row-start-2 md:row-end-5 md:p-8 md:max-h-fit
                        md:border-solid md:border-l-2 md:border-white
                "/>

                <ButtonScrollTo 
                    scrollToTarget='#about-me' 
                    className="
                        text-slate-900 text-sm bg-s-turquoise row-start-5 rounded-half
                        md:text-sm md:rounded-none md:col-start-1 md:row-start-3 md:row-end-5 md:self-center md:w-full md:m-0 md:h-20
                "/>

                <GatsbyImage 
                    image={image}
                    alt={alt} 
                    objectFit="contain" 
                    className="max-h-125 md:max-h-full md:bg-s-turquoise md:col-start-2 md:row-start-2 md:row-end-4"  // css for outer wrapper
                    imgClassName="" // css for img element
                />

                <UnsplashCredit 
                    photographer="Sasha Freemind" 
                    unsplashName="@sashafreemind"
                    textColor="text-white"
                    className="w-full flex justify-center md:col-start-2 md:row-start-4 md:row-end-4"
                /> 
            </div>
        </div>
    )
}

export default Header;