import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export const SliderButton = ({onClick, direction = "next", disabled = false}) => {

    const arrowIcon = direction === "next" ? faArrowCircleRight : faArrowCircleLeft 
    
    const disabledStyle = disabled ? "text-white/25" : "text-white"
   
    return (
        <button
            className="self-center"
            onClick={() => onClick()}
            disabled={disabled}
        >
            <FontAwesomeIcon 
                className={`fa-2x ${disabledStyle}`}
                icon={arrowIcon} 
            />
        </button>
    )
}