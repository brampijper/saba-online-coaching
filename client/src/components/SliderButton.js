import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const directionToIcon = {
    previous: faArrowCircleLeft,
    next: faArrowCircleRight
}

export const SliderButton = ({onClick, direction = "next"}) => {
    const arrowIcon = directionToIcon[direction];

    return (
        <button 
            onClick={() => onClick()}
            className={`
                absolute top-1/2 z-[3] rounded-full bg-black flex border-[3px] border-solid border-black text-white
                lg:static lg:self-center
                ${ direction === "previous" ? "-left-6 sm:left-0" : "-right-6 sm:right-0"}
            `}
        >
            <FontAwesomeIcon 
                className={`fa-3x text-white`}
                icon={arrowIcon} 
            />
        </button>
    )
}