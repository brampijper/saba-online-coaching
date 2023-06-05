import React, { useState } from 'react';
import SliderCard from '../SliderCard';

export default function useSlider(items = []) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    function onNext() {
        setSelectedIndex(index =>
            (index + 1) % items.length
        );
    }

    function onPrevious() {
        setSelectedIndex(index => 
            (index - 1 + items.length) % items.length
        );
    }

    const sliderCards = items.map( (item, index) => { 
        const isSelected = index === selectedIndex;
        const isNext = index === (selectedIndex + 1) % items.length;
        const isPrevious = index === (selectedIndex - 1 + items.length) % items.length;

        return (
            <SliderCard 
                key={item.id}
                tool={item}
                isSelected={isSelected}
                isNext={isNext}
                isPrevious={isPrevious}
            />
        )
    });
 
    return [onNext, onPrevious, sliderCards]
}