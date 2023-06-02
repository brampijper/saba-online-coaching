import React, { useState } from 'react';
import SliderCard from '../SliderCard';

export default function useSlider(items = []) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    
    // Check if currently at the end of the items array.
    const atEnd = selectedIndex + 1 === items.length;
    const atStart = selectedIndex === 0;

    // Modulo operator is used to make an infinte loop.
    function onNext() {
        setSelectedIndex(index =>
            (index + 1) % items.length
        );
    }

    const selected = items[selectedIndex];
    const startItem =  items[0]
    const endItem = items[items.length - 1]

    // Determine the item before and after the currently selected item.
    const nextItem = atEnd ? startItem : items[selectedIndex + 1]
    const previousItem = atStart ? endItem : items[selectedIndex - 1]

    const sliderCards = items.map(item => (
        <SliderCard
          key={item.id}
          tool={item}
          isSelected={selected === item}
          isNextItem={nextItem === item}
          isPreviousItem={previousItem === item}
        />
    ));


    return [sliderCards, onNext]
}

