import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CardsLayout from './CardsLayout';

const getData = graphql`
query GetAboutPageContent {
    strapiAboutPage {
      about_me
      title
      what_ive_done
      aboutme_images {
        alternativeText
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      whativedone_images {
        alternativeText
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  
`

const Cards = () => {
    const data = useStaticQuery(getData);
    const {
        strapiAboutPage: {
            about_me, what_ive_done, aboutme_images, whativedone_images, title
        }
    } = data;

    return (
        <div className="text-center h-auto max-w-screen-lg space-y-2
                        mx-auto flex flex-col items-center
                        xl:max-w-screen-xl lg:space-y-16"
        >
          <h2 className="md:my-20 md:block hidden">{title}</h2>        
          <CardsLayout text={about_me} image={aboutme_images} />
          <CardsLayout text={what_ive_done} image={whativedone_images} secondaryStyle={true} />
        </div>
    )
}

export default Cards;