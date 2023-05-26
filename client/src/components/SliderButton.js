import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export const SliderButton = (props) => {
    const { onClick, showMore, direction } = props

    const icon = direction === "prev" ? faArrowCircleLeft : faArrowCircleRight
    
    const arrowIcon = (
        <FontAwesomeIcon icon={icon} className='fa-2x text-white' />
    ) 

    return (
        <button
            className="self-center"
            onClick={() => onClick()}
            disabled={showMore}
        >
            {arrowIcon}
        </button>
    )
}