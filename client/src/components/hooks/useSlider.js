import React, { useState } from 'react';
import { getCardClassName } from '../Slider/sliderCardStyles';

export default function useSlider(items = [], CardComponent) {
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
            <CardComponent 
                key={item.id}
                item={item}
                cardStyles={getCardClassName(isSelected, isNext, isPrevious)}
            />
        )
    });

    return [onNext, onPrevious, sliderCards]
}