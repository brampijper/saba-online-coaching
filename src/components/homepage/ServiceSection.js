import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import Products from './stripe/Products';
import ServiceCard from '../service/ServiceCard';

import Triangles from "../../images/svg/triangles.svg";

const getData = graphql`
query ServiceCards {
    strapiHomepage {
      service_title
      services {
        description
        id
        price
        title
      }
    }
  }
`


const ServiceSection = () => {
    const data = useStaticQuery(getData);
    const { 
        strapiHomepage: { service_title, services } 
    } = data;
    return (
        <div className="h-auto bg-s-purple relative">
            <div className="mx-auto pt-16 pb-32 md:pt-32 md:pb-60 flex flex-col gap-20 md:gap-32 px-6 max-w-screen-lg xl:max-w-screen-xl">
                <h2 className="text-white text-left md:text-center">
                    {service_title}
                </h2>

                <div className="grid grid-flow-row gap-12 place-content-center lg:grid-cols-2 lg:gap-20">
                    {
                        services.map( (service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))
                    }
                </div>
            </div>
            <Triangles className="w-full h-auto absolute lg:max-w-screen-lg xl:max-w-screen-xl left-0 right-0 ml-auto mr-auto" />
        </div>
    )
}

export default ServiceSection; 