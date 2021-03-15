import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import ButtonMailTo from './ButtonMailTo';
import ArrowDown from "../images/svg/arrow-down.svg";


const getData = graphql`
query GetHeaderContent {
    strapiHeader {
      title
      subtitle
      button
      quote
      image {
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
        strapiHeader: {
            title, subtitle, button, quote,
            image: { 
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
                    space-y-14 px-6
                    max-w-screen-lg mx-auto
                    sm:flex sm:flex-row sm:justify-around sm:space-x-14 sm:items-center xl:px-0
                    lg:space-x-20
                    xl:max-w-screen-xl 
                    ">

                    <div className="
                        flex flex-col h-auto
                        text-left
                        space-y-10
                        max-w-prose
                        container
                        "
                    >
                        <h1>{title}</h1>
                        <p>{subtitle}</p>

                        <ButtonMailTo> 
                            <span>{button}</span>
                        </ButtonMailTo>

                    </div>

                    <div className="max-w-sm lg:max-w-md">
                        <GatsbyImage image={image} alt={alt} className="rounded-lg" />
                    </div>
                </div>

            </div>

            <div className="container mx-auto">
                <div className="px-6 my-20 flex space-x-3 md:max-w-4xl mx-auto">
                    <FontAwesomeIcon icon={faQuoteRight} className='fa-2x fa-fw fa-flip-horizontal' />
                    <h3 className="relative m-auto">
                        {quote}
                        {/* <FontAwesomeIcon icon={faQuoteRight} className='fa-sm fa-fw absolute bottom-0' /> */}
                    </h3>
                </div>
                
                <ArrowDown className="h-28 mx-auto" onClick={ () => scrollTo('#about-me')} />
            </div>

        </>
    )
}

export default Header;