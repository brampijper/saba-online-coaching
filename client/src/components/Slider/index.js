import React from 'react'

import SliderButton from "./SliderButton"
import useSlider from "../hooks/useSlider"

export const Slider = ({items, styles = "", children}) => {

    const [onNext, onPrevious, sliderCards] = useSlider(items, children)

    return (
        <div className={`grid grid-cols-[1fr_6fr_1fr] h-fit w-full items-center gap-2
            xl:px-32 ${styles}
        `}>
            <SliderButton 
                onClick={onPrevious} 
                direction="prev"
                styles="col-start-1"
            />

            <div className="col-start-2 flex flex-col justify-center items-center h-full w-full relative">
                {sliderCards}
            </div>
 
            <SliderButton 
                onClick={onNext} 
                direction="next"
                styles="col-start-3" 
            />
        </div>
    )
}