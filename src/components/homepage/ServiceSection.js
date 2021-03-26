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
        <>
        <div>
            <div className="h-auto bg-s-purple pb-40">
                
                <div className="h-auto space-y-32 max-w-screen-lg xl:max-w-screen-xl mx-auto px-6">
                    <h2 className="text-white text-center pt-20">{service_title}</h2>

                    <div className="grid grid-flow-row gap-12 place-content-center lg:grid-cols-2 lg:gap-20">
                    
                        {
                            services.map( (service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))
                        }
                    </div>
                    
                </div>
            </div>
            <Triangles className="w-full h-auto lg:max-w-screen-lg xl:max-w-screen-xl mx-auto" />
        </div>
        </>
    )
}

export default ServiceSection; 