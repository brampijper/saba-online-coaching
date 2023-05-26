import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import Products from './stripe/Products';
import ServiceCard from '../service/ServiceCard';

import { Triangles } from "../svg/Triangles";

const getData = graphql`
query ServiceCards {
    strapiHomepage {
      service_title
      tools {
        id
        title
        description {
            data {
                description
            }
        }
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
  }
`


const ServiceSection = () => {
    const data = useStaticQuery(getData);
    const { 
        strapiHomepage: { service_title, tools } 
    } = data;
    return (
        <div className="h-auto bg-s-purple relative">
            <div className="mx-auto pt-16 pb-32 flex flex-col items-center gap-20 px-6
                md:pt-32 md:pb-60 md:gap-32
            ">
                <h2 className="text-white text-left md:text-center">
                    {service_title}
                </h2>

                <div className="grid grid-flow-row gap-12 place-content-center lg:grid-cols-2 lg:gap-20">
                    {
                        tools.map( (tool) => ( // Move this out of the template elements.
                            <ServiceCard key={tool.id} tool={tool} />
                        ))
                    }
                </div>
            </div>
            <Triangles className="w-full h-auto absolute lg:max-w-screen-lg xl:max-w-screen-xl left-0 right-0 ml-auto mr-auto" />
        </div>
    )
}

export default ServiceSection; 