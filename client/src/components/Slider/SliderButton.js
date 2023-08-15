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
            className={`z-[3] rounded-md bg-slate-900 text-white px-1 py-1 flex items-center justify-center space-x-2
                sm:rounded-full sm:border-[3px] sm:border-solid sm:border-black sm:px-2 sm:py-1 
                hover:bg-slate-700 hover:border-slate-700 self-center
                ${arrowDirectionStyles[direction]} 
                ${styles}
        `}>
            <FontAwesomeIcon 
                className="fa-xl text-white" 
                icon={arrowIcon[direction]} 
            />
            
            <span className="hidden md:block text-xs lg:text-sm font-bold uppercase">
                {direction}
            </span>
        </button>
    )
}

export default SliderButton;