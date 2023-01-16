import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';

import {ArrowDown} from "../svg/ArrowDown";

const ArrowBounceDown = ({ scrollToTarget }) => {
    return (
        <ArrowDown className="h-24 mx-auto cursor-pointer animate-bounce" onClick={ () => scrollTo(`${scrollToTarget}`)} />
    )
}

export default ArrowBounceDown;