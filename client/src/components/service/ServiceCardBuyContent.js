import React from 'react';
// import PaylpalButton from './PaypalButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ServiceCardTriangle } from "../svg/ServiceCardTriangle";

const ServiceCardBuyContent = ({price}) => {
    return (
        <div className="absolute right-0 top-0">
                <button className="flex flex-col gap-2 text-center text-white absolute right-0 items-center mt-4 z-10 h-16 w-20">
                    <span>
                        {`€${price}`}
                    </span>
                    {/* <PaylpalButton key={price} price={price} className='md:mt-2 md:mx-auto' /> */}
                    <FontAwesomeIcon icon={faShoppingCart} className='fa-lg fa-fw md:mt-2 md:mx-auto' />
                </button> 
                <ServiceCardTriangle className="w-80 h-80" />
        </div>
    )
}

export default ServiceCardBuyContent;