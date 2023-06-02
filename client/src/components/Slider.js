import React from 'react';
import { useState } from "react";

import { SliderButton } from './SliderButton';
import useSlider from './hooks/useSlider';

export const Slider = ({children}) => {
    const [items, setItems] = useState(children)
    const [sliderCards, onNext] = useSlider(items)
    
    return (
        <div className="relative flex flex-col h-full w-full items-center justify-center
            lg:flex-row 
        ">
            {sliderCards}

            <SliderButton
                onClick={onNext}
            />
        </div>
    )
}