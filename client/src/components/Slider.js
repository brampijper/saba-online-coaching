import React from 'react';
import { useState } from "react";

import { SliderButton } from './SliderButton';

export const Slider = ({items}) => {
    const [index, setIndex] = useState(0)
    const [cards, setCards] = useState(items)
    
    const currentItem = cards[index];

    const hasNext = index < cards.length - 1;
    const hasPrev = index  !== 0;

    function handleNextClick() {
        hasNext && setIndex(index + 1)
    }

    function handlePrevClick() {
        hasPrev && setIndex(index -1)
    }

    return (
        <div className="flex flex-row gap-4">
            
            <SliderButton 
                onClick={handleNextClick} 
                disabled={hasPrev} 
                direction={"prev"} 
            />

            <div className=''>
                {currentItem}
            </div>

            <SliderButton 
                onClick={handlePrevClick} 
                disabled={hasNext} 
                direction={"next"} 
            />

        </div>
    )
}