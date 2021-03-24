import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Triangles from "../images/svg/triangles.svg";

const getData = graphql`
query getServiceCards {
    allStrapiServices {
      nodes {
        strapiId 
        service {
          id
          description
          price
          price_description
          title
        }
      }
    }
  }
  
`


const Services = () => {
    const data = useStaticQuery(getData);
    const { 
        allStrapiServices: {
            nodes: services
        } 
    } = data;
    return (
        <>
        <div>
            <div className="h-auto bg-s-purple pb-40">
                
                <div className="h-auto space-y-32 max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                    <h2 className="text-white text-center pt-20">Sofia's services</h2>

                    <div className="
                        card-container grid grid-flow-row gap-12 place-content-center
                        lg:grid-cols-2 lg:gap-20
                        ">

                            {
                                services.map( (service) => {
                                    const {
                                        service: {id, title, description, price, price_description}
                                    } = service
                                    return (
                                        <div key={id} className="w-full h-auto rounded-lg bg-white shadow-md relative p-8 max-w-prose overflow-hidden">
                                            <div className="absolute right-0 top-0 mt-2 mr-4 flex flex-col z-10 text-white text-center">
                                                <span>{`$${price}`}</span>
                                                <span>{price_description}</span>
                                                <FontAwesomeIcon icon={faShoppingCart} className='fa-lg fa-fw mt-2 mx-auto' />
                                            </div>
                
                                            <article className="space-y-8 sm:space-y-4">
                                                <h4 className="word-spacing-wide md:word-spacing-none">{title}</h4>                                
                                                <p>{description}</p>
                                                <Link className="underline block" to={`/services#${service.strapiId}`}>Read more</Link>
                                            </article> 
                                            {/* <div className="absolute bg-s-turquoise rounded-full z-0 w-40 h-40 top-1/11 right-1/13 sm:-right-1/4 sm:-top-1/2 sm:w-80 sm:h-80"></div> */}
                                        </div>
                                    )
                                })
                            }
                    
                    </div> 
                </div>
            </div>
            <Triangles className="w-full h-auto lg:max-w-screen-lg xl:max-w-screen-xl mx-auto" />
        </div>
        </>
    )
}

export default Services; 