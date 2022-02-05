import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';

import UnsplashCredit from '../UnsplashCredit';

const ImageCard = (props) => {
    return (
        <div className={`relative ${props.className}`}>
            <GatsbyImage key={props.id} image={props.image} alt={props.alt} className="max-h-96 rounded-lg" />
            <UnsplashCredit 
                photographer="Gabnrielle Clare Marino" 
                unsplashName="@gabiontheroad"
                textColor="text-s-turquoise-light"
                className="absolute inset-x-1 bottom-2 text-left"
            />
        </div>
    )
}

export default ImageCard;