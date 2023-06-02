import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export const SliderButton = ({onClick, direction = "next", disabled = false}) => {

    const arrowIcon = direction === "next" ? faArrowCircleRight : faArrowCircleLeft 
       
    return (
        <button
            className="absolute -right-6 top-1/2 z-[3] rounded-full bg-black flex border-[3px] border-solid border-black text-white
            sm:static sm:self-end"
            onClick={() => onClick()}
        >
            <FontAwesomeIcon 
                className={`fa-3x text-white`}
                icon={arrowIcon} 
            />
        </button>
    )
}