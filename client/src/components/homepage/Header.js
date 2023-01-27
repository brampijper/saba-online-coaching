import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ButtonMailTo from '../ui/ButtonMailTo';
import UnsplashCredit from '../UnsplashCredit';
import { HeaderTitle } from '../svg/HeaderTitle'

const getData = graphql`
query GetHeaderContent {
    strapiHomepage {
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
            header_subtitle, header_button,
            // header_title
            header_image: { 
                localFile, 
                alternativeText: alt 
            } 
        }
    } = data
    const image = getImage(localFile);

    return (
        <div className="bg-black h-auto">
            {/* <hr className='w-5/6 m-auto sm:w-full' /> */}
            <div className="flex flex-col content-center flex-wrap space-y-16">
                
                <div className="
                    container bg-black grid mt-16 test-container min-h-[350px]
                    md:items-center md:min-h-[500px] overflow-hidden 
                ">
                    <HeaderTitle className="
                        w-full h-full scale-y-150 mt-8 scale-x-100 max-w-5xl
                        sm:scale-y-[1.02] sm:mt-0 grid-center
                    "/>
                    <p className="
                        text-white w-[168px] text-[0.9rem] top-10 left-3
                        sm:w-[230px] sm:top-0
                        sm:w-[300px] md:text-[1.2rem] sm:text-right
                        lg:text-[1.5rem] lg:max-w-prose
                        grid-left

                        top:2.5rem;
                        left: 0.8rem;
                    ">
                        {header_subtitle}
                    </p>

                    <ButtonMailTo buttonText={header_button} customStyle="
                        w-[8rem] h-[3rem] flex flex-col justify-center text-center self-start
                        rounded-[2rem] bg-red-600 text-white font-bold self-center text-lg
                        md:self-end
                        lg:w-[15rem] lg:h-[4.4rem]
                        " 
                    />

                    {/* <div className='w-full h-full bg-neutral-900 mt-16'></div> */}
                   
                    <div className='relative'>
                        <GatsbyImage image={image} alt={alt} />
                        <UnsplashCredit 
                            photographer="Sasha Freemind" 
                            unsplashName="@sashafreemind"
                            textColor="text-white/40"
                            className="flex justify-center bg-black pb-4 md:absolute md:inset-x-1 md:bottom-2"
                        /> 
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Header;