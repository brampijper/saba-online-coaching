import React from 'react';
// import PaylpalButton from './PaypalButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CornerSvg from "../../images/svg/service-card-triangle.svg";

const ServiceCardBuyContent = ({price}) => {
    return (
        <div className="flex justify-center absolute right-0 top-0 h-auto bg-s-turquoise w-full md:block md:bg-transparent md:w-4/5">
            <button className="flex flex-row text-center text-white relative z-10 items-center justify-center h-16 space-x-1 md:mt-6 md:flex-col md:w-32 md:float-right">
                <span>
                    {`€${price}`}
                </span>
                <span className="mr-4"></span>
                {/* <PaylpalButton key={price} price={price} className='md:mt-2 md:mx-auto' /> */}
                <FontAwesomeIcon icon={faShoppingCart} className='fa-lg fa-fw md:mt-2 md:mx-auto' />
            </button> 
        <CornerSvg className="hidden md:block w-120 h-120 absolute right-0 top-0" />
    </div>
    )
}

export default ServiceCardBuyContent;