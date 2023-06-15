import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const SliderButton = ({onClick, direction, styles}) => {
    const arrowIcon = {
        prev: faArrowCircleLeft,
        next: faArrowCircleRight 
    }
    
    const arrowDirectionStyles = {
        prev: "-left-6 sm:left-0",
        next: "-right-6 sm:right-0"
    }

    return (
        <button onClick={onClick} 
            className={`z-[3] rounded-md bg-black text-white px-1 py-1 flex items-center justify-center space-x-2
                sm:rounded-full sm:border-[3px] sm:border-solid sm:border-black sm:px-4 sm:py-2
                ${arrowDirectionStyles[direction]} 
                ${styles}
        `}>
            <FontAwesomeIcon 
                className="text-white text-2xl" 
                icon={arrowIcon[direction]} 
            />
            
            <span className="hidden md:block text-sm font-bold uppercase">
                {direction}
            </span>
        </button>
    )
}

export default SliderButton;