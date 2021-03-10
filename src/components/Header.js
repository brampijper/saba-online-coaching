import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import ButtonMailTo from './ButtonMailTo';


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
        <div className="flex flex-col items-center">

            <div className="
                flex flex-col h-auto px-6 pb-8
                text-left
                bg-s-turquoise-light"
            >
                <h1 className="mt-16">{title}</h1>
                <p  className="mt-5 mb-5">{subtitle}</p>

                <ButtonMailTo> 
                    <span>{button}</span>
                </ButtonMailTo>

            </div>

            <div className="px-6">
                <GatsbyImage image={image} alt={alt} />
            </div>

            <div className="px-6 my-20 flex space-x-3">
                <FontAwesomeIcon icon={faQuoteRight} className='fa-2x fa-fw fa-flip-horizontal' />
                <h3 className="text-4xl relative m-auto">
                    {quote}
                    <FontAwesomeIcon icon={faQuoteRight} className='fa-sm fa-fw absolute bottom-0' />
                </h3>
            </div>



        </div>
    )
}

export default Header;