import React from 'react';
import ButtonMailTo from '../ButtonMailTo';

const ServicePageContent = ( {services} ) => {
    let bgColor, textColor, titleColor;

    function updateColors(darkMode) {
        if (darkMode) {
            bgColor = "bg-s-turquoise"
            textColor = "text-white";
            titleColor = "text-s-turquoise"
        } else {
            bgColor = "bg-s-turquoise-light";
            textColor = "text-black";
            titleColor = "text-s-purple";
        }
    }
    return (
        <>
        {
            services.map( ({title, id, description, darkMode, price, program_duration, subject}) => {
                updateColors(darkMode);
                return (
                    <div key={id} className={ darkMode ? "bg-s-purple pt-16 pb-32 text-white" : "" }>
                    
                        <div id={id} className="container mx-auto text-center h-auto grid grid-cols-1 gap-12 md:space-y-28 justify-items-center
                        xl:max-w-screen-xl max-w-screen-lg px-6">
                            <div>
                                <h2 className="mb-6 mt-24">{title}</h2>
                                <p className="lg:w-2/4 mx-auto">{description}</p>
                            </div>
                            <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 lg:space-x-40 md:space-x-20">
                                <div className={` ${bgColor} h-36 w-100 lg:h-48 lg:w-48 rounded border-2 border-s-purple flex justify-center items-center`}><span className="text-xl lg:text-2xl font-bold text-s-purple word-spacing-wide">1:1 coaching</span></div>
                                <div className={` ${bgColor} h-36 w-100 lg:h-48 lg:w-48 rounded border-2 border-s-purple flex justify-center items-center`}><span className="text-xl lg:text-2xl font-bold text-s-purple word-spacing-wide">{price}$ p/session</span></div>
                                <div className={` ${bgColor} h-36 w-100 lg:h-48 lg:w-48 rounded border-2 border-s-purple flex justify-center items-center`}><span className="text-xl lg:text-2xl font-bold text-s-purple word-spacing-wide">{program_duration} days</span></div>
                            </div>

                            <div className="container grid grid-cols-1 gap-16 md:grid-cols-2 md:text-left md:gap-20 mx-auto mt-14">
                                {
                                    subject.map( ( subject ) => {
                                        return (
                                        <article key={subject.id} className="flex flex-col space-y-3 max-w-prose">
                                            <h4 className={` ${titleColor} font-bold text-3xl`}>{subject.title}</h4>
                                            <p>{subject.description}</p>
                                        </article>
                                        )
                                    })
                                }
                            </div>
                            <ButtonMailTo> 
                                <span className="text-black">Buy {title} package</span>
                            </ButtonMailTo>
                        </div>

                    </div>
                    
                )
            })
        } 
        </>
    )
}

export default ServicePageContent;