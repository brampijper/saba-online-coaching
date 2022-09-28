import React from 'react';
import { getImage } from 'gatsby-plugin-image';

import TextCard from './TextCard';
import ImageCard from './imageCard';

const CardsLayout = ({text, image, secondaryStyle}) => {
    return (
      <div className="grid md:grid-cols-2 px-6 justify-items-center gap-2 place-items-start">
        <TextCard 
          markdown={text}
          className={`space-y-6 max-w-prose pb-4`}
          secondaryStyle={secondaryStyle}
          >
        </TextCard>
          {
              image.map( ( { localFile, alternativeText, id }) => {
                  const image = getImage(localFile);
                  return (
                      <ImageCard key={id} image={image} alt={alternativeText} secondaryStyle={secondaryStyle} />
                  )
              })
          }
    </div>
    )
}

export default CardsLayout;