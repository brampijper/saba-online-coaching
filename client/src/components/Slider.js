import React from 'react';
import { useState } from "react";

import { SliderButton } from './SliderButton';

export const Slider = ({items}) => {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const [cards, setCards] = useState(items)

    const hasNext = index < items.length - 1;
    const hasPrev = index !== 0;

    function handleNextClick() {
        hasNext && setIndex(index + 1)
    }

    function handlePrevClick() {
        hasPrev && setIndex(index -1)
    }

    return (
        <div className="flex flex-row gap-4">
            
            <SliderButton onClick={handleNextClick} direction={"prev"} />

            <div className=''>
                {items[index]}
            </div>

            <SliderButton onClick={handlePrevClick} direction={"next"} />

        </div>
    )
}