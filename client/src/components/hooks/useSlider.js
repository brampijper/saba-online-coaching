import { useState } from 'react';

export default function useSlider(items = []) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    
    // Check if currently at the end of the items array.
    const atEnd = selectedIndex + 1 === items.length;

    // Modulo operator is used to make an infinte loop.
    function onNext() {
        setSelectedIndex(index =>
            (index + 1) % items.length 
        );
    }

    const selected = items[selectedIndex];

    // Determine the item before the currently selected item.
    // use the first item if at the end of the array.
    const beforeSelected = atEnd ? items[0] : items[selectedIndex + 1]

    return [selected, beforeSelected, onNext]
}

