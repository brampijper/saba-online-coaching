import React from 'react';
import SliderButton from "./SliderButton"
import useSlider from "../hooks/useSlider"

export const Slider = ({items, styles = "", children}) => {
    const [onNext, onPrevious, sliderCards, height] = useSlider(items, children)

    return (
        <div className={`grid grid-cols-[1fr_6fr_1fr] min-h-[10rem] min-w-full justify-around items-center gap-2 my-16 ${styles}`}
            style={{height: height}}
        >
            <SliderButton 
                onClick={onPrevious} 
                direction="prev"
                styles="col-start-1"
            />

            <div className="col-start-2 flex flex-col justify-center items-center h-full relative">
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