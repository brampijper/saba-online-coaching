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

/*
    I also removed the xl:p-32 -> I have to check the effect of that on the homepage.
    Maybe i can give it styles manually?

    Maybe I also want the smaller slider buttons for the instruction cards as it doesn't have that much space in the current layout.

    Also check spacings / styling / margins on mobile for the tool page.

    --- ideas ---
        - I also have many more ideas. Like creating your own profile with your favorite tools
        - One could collect points for excersising mental health tools.
        - You could click on the benefits and see all the tools that share the same benefits.
        - Invite close friends to create more content (more friends of the website).

        - I want to level the svg illustrations. I want it to be even more prettier. 
        - And add animations add some point.
        - The landingpage section is not the best but will do just fine for now.
        - Have to look at the colour schemes again
*/