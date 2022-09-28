import React from 'react';
import { Link } from "gatsby";

import ServiceCardBuyContent from "./ServiceCardBuyContent";


const ServiceCard = ({service}) => {
    return (
        <div className="w-full h-auto rounded-lg bg-white shadow-md relative z-10 p-8 lg:p-12 max-w-prose overflow-hidden">
            
            <ServiceCardBuyContent price={service.price} />
            
            <article className="md:mt-0 md:space-y-8 space-y-4 z-20 relative md:mr-14 lg:mr-4">
                <h4 className="word-spacing-wide md:word-spacing-none">{service.title}</h4>                                
                <p>{service.description}</p>
                <Link className="underline inline-block" to={`/services#${service.id}`}>Explore {service.title}</Link>
            </article>
        </div>
    )
}

export default ServiceCard;