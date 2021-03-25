import React from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Triangles from "../images/svg/triangles.svg";
import CornerSvg from "../images/svg/service-card-triangle.svg";

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
                                        <div key={id} className="w-full h-auto rounded-lg bg-white shadow-md relative z-10 p-8 max-w-prose overflow-hidden">
                                            <div className="absolute right-0 top-0 h-auto bg-s-turquoise w-full md:bg-transparent md:w-4/5">
                                                <Link to="/" className="
                                                    flex flex-row text-center text-white relative z-10 items-center justify-center h-16 space-x-1
                                                    md:mt-6 md:flex-col md:w-32 md:float-right 
                                                    ">
                                                    <span className="">{`$${price} `}</span>
                                                    <span className="mr-4">{price_description}</span>
                                                    <FontAwesomeIcon icon={faShoppingCart} className='fa-lg fa-fw md:mt-2 md:mx-auto' />
                                                </Link>
                                                    <CornerSvg className="hidden md:block w-120 h-120 absolute right-0 top-0" />
                                            </div>

                                            <article className="mt-16 md:mt-0 md:space-y-8 space-y-4 z-20 relative md:mr-14">
                                                <h4 className="word-spacing-wide md:word-spacing-none">{title}</h4>                                
                                                <p>{description}</p>
                                                <Link className="underline block" to={`/services#${service.strapiId}`}>Read more</Link>
                                            </article>
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