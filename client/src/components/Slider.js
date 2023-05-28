import React from 'react';
import { useState } from "react";

import { SliderButton } from './SliderButton';
import ServiceCard from './SliderCard';
import useSlider from './hooks/useSlider';

import "../styles/slider.css";

export const Slider = (props) => {
    const [items, setItems] = useState(props.children)
    const [selected, beforeSelected, onNext] = useSlider(items)

    const sliderCards = items.map(item =>
        <ServiceCard 
            key={item.id} 
            tool={item}
            isSelected={selected === item}
            isBeforeSelected={beforeSelected === item}
        />
    );

    return (
        <div className="flex flex-row gap-4 w-full h-[48rem]">
            
            <div className="relative flex-1 flex flex-col items-center">
                {sliderCards}
            </div>

            <SliderButton 
                onClick={onNext} 
            />

        </div>
    )
}