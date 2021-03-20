import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import BgTestimonials from "../images/svg/bg_testimonials.svg";

const getData = graphql`
query getTestimonials {
    allStrapiTestimonals {
      nodes {
        card {
          description
          id
          large_card
          name
          title
          workplace
          image {
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
    }
  }
`

const Testimonials = () => {
    const data = useStaticQuery(getData);
    const {
        allStrapiTestimonals: {
            nodes: cards
        }
    } = data

    console.log(cards);

    return (
        <>
            <div>
            <div className="h-auto pb-20 lg:pb-40 relative">
                
                <div className="h-auto max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                    <h2 className="text-center pt-20">Testimonials</h2>
                    <p className="text-center max-w-lg mx-auto mt-10"> I’ve had the pleasure of working together with Sofia on multiple People projects in fast growing companies. One of her strengths is really connecting and leveling with others.</p>

                    <div className="
                        card-container grid grid-flow-row gap-12 place-content-center mt-32
                        lg:grid-cols-1 lg:gap-20
                        ">

                            {
                                cards.map( (card) => {
                                    const {
                                        card: {
                                            id, title, description, name, workplace, large_card, 
                                            image: {localFile}
                                        }
                                    } = card
                                    const image = getImage(localFile);

                                    return (
                                        <div key={id} className="
                                            w-full h-auto rounded-lg border-opacity-90 border-4 border-s-gold bg-white shadow-md overflow-hidden
                                            pb-8
                                            sm:w-4/5 sm:mx-auto
                                            md:pb-12
                                            lg:pb-0
                                            ">
                                
                                            <article className="space-y-8 sm:space-y-4 md:space-y-10 flex flex-col lg:flex-row">

                                                <div className="relative lg:min-w-16">
                                                    <GatsbyImage image={image} alt="should be dynamic" className="max-h-96 lg:max-h-full lg:h-full" />
                                                    
                                                    <div className="
                                                        absolute bottom-1.5 w-full py-2 px-8 text-white text-left bg-s-gold bg-opacity-80
                                                        md:px-12
                                                        lg:bottom-0 lg:px-0 lg:text-center
                                                        ">
                                                        <h5 className="text-base">{name}</h5>
                                                        <span className="text-xs">{workplace}</span>
                                                    </div>
                                                
                                                </div>

                                                <div className="max-w-prose mx-8 space-y-4 md:mx-12 md:space-y-6 lg:pb-8">
                                                    <h4 className="">{title}</h4>
                                                    <p>{description}</p>                                
                                                    {/* <Link className="underline block" to='/testimonials'>Read more</Link> */}
                                                </div>

                                            </article> 
                                        </div>
                                    )
                                })
                            }
                    
                    
                    </div> 
                </div>
                    <BgTestimonials className="w-full h-full absolute top-1/20 md:top-0 xl:transform xl:scale-x-150 z-minus" />
            </div>
        </div>
        </>
    )
}

export default Testimonials;