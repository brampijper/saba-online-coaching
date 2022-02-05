import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';

import UnsplashCredit from '../UnsplashCredit';

const ImageCard = ({image, alt, secondaryStyle}) => {
    const flipOrder = secondaryStyle ? 'order-1' : 'order-3'
    return (
        <div className={`relative ${flipOrder}`}>
            <GatsbyImage image={image} alt={alt} className="max-h-96 rounded-lg" />
            <UnsplashCredit 
                photographer="Gabnrielle Clare Marino" 
                unsplashName="@gabiontheroad"
                textColor="s-turquoise-light"
                className="absolute inset-x-1 bottom-2 text-left"
            />
        </div>
    )
}

export default ImageCard;