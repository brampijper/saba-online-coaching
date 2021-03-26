import React from 'react';
import { Link } from "gatsby";

import ServiceCardBuyContent from "./ServiceCardBuyContent";


const ServiceCard = ({service}) => {
    return (
        <div className="w-full h-auto rounded-lg bg-white shadow-md relative z-10 p-8 max-w-prose overflow-hidden">
            
            <ServiceCardBuyContent price={service.price} />
            
            <article className="mt-16 md:mt-0 md:space-y-8 space-y-4 z-20 relative md:mr-14">
                <h4 className="word-spacing-wide md:word-spacing-none">{service.title}</h4>                                
                <p>{service.description}</p>
                <Link className="underline block" to={`/services#${service.id}`}>Read more</Link>
            </article>
        </div>
    )

}

export default ServiceCard;