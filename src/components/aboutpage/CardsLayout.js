import React from 'react';
import { getImage } from 'gatsby-plugin-image';

import TextCard from './TextCard';
import ImageCard from './imageCard';

const CardsLayout = (props) => {
  let order;
  props.alt ? order=1 : order=3;
    return (
      <div className="grid md:grid-cols-2 px-6 justify-items-center gap-2 place-items-start">
        <TextCard 
          markdown={props.text}
          className={`space-y-6 max-w-prose pb-4`}
          alt={props.alt}
          >
        </TextCard>
          {
              props.image.map( ( { localFile, alternativeText, id }) => {
                  const image = getImage(localFile);
                  return (
                      <ImageCard id={id} image={image} alt={alternativeText} className={`order-${order}`} />
                  )
              })
          }
    </div>
    )
}

export default CardsLayout;