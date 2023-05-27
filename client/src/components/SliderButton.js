import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export const SliderButton = ({onClick, direction, disabled}) => {

    const arrowIcon = direction === "prev" ? faArrowCircleLeft : faArrowCircleRight
    
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