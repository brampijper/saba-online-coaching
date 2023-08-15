import React, { useEffect, useRef, useState } from 'react';
import { getCardClassName } from '../Slider/sliderCardStyles';
import useWindowResize from './useWindowResize';

export default function useSlider(items = [], CardComponent) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const cardRef = useRef(null)
    const [height, setHeight] = useState(0)
    const [hasResized] = useWindowResize()

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
    
    useEffect( () => {
        setHeight(cardRef.current.clientHeight)
    }, [hasResized])

    const sliderCards = items.map( (item, index) => { 
        const isSelected = index === selectedIndex;
        const isNext = index === (selectedIndex + 1) % items.length;
        const isPrevious = index === (selectedIndex - 1 + items.length) % items.length;

        return (
            <CardComponent 
                key={item.id}
                item={item}
                cardStyles={getCardClassName(isSelected, isNext, isPrevious)}
                index={index+1}
                ref={cardRef}
            />
        )
    });

    return [onNext, onPrevious, sliderCards, height]
}