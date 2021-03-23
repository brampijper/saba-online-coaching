import React from 'react';
import ButtonMailTo from '../ButtonMailTo';

const ServiceContent = ({ service: {service} }) => {
    let bgColor = "bg-s-turquoise-light";
    let textColor = "text-black";
    let titleColor = "text-s-purple";

    if (service.darkMode) {
        bgColor = "bg-s-turquoise"
        textColor = "text-white";
        titleColor = "text-s-turquoise"
    }
    console.log(service)
    return (
        <>
            <div className={ service.darkMode ? "bg-s-purple pt-32 pb-32 text-white" : "" }>
            
                <div className="container mx-auto text-center h-auto grid grid-cols-1 gap-12 md:space-y-28 justify-items-center
                xl:max-w-screen-xl max-w-screen-lg px-6">
                    <div>
                        <h2 className="mb-6 mt-24">{service.title}</h2>
                        <p className="lg:w-2/4 mx-auto">{service.description}</p>
                    </div>
                    <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 lg:space-x-40 md:space-x-20">
                        <div className="bg-s-turquoise-light h-36 w-100 lg:h-48 lg:w-48 rounded border-2 border-s-purple flex justify-center items-center"><span className="text-xl lg:text-2xl font-bold text-s-purple word-spacing-wide">1:1 coaching</span></div>
                        <div className="bg-s-turquoise-light h-36 w-100 lg:h-48 lg:w-48 rounded border-2 border-s-purple flex justify-center items-center"><span className="text-xl lg:text-2xl font-bold text-s-purple word-spacing-wide">{service.price}$ p/session</span></div>
                        <div className="bg-s-turquoise-light h-36 w-100 lg:h-48 lg:w-48 rounded border-2 border-s-purple flex justify-center items-center"><span className="text-xl lg:text-2xl font-bold text-s-purple word-spacing-wide">{service.program_duration} days</span></div>
                    </div>

                    <div className="container grid grid-cols-1 gap-16 md:grid-cols-2 md:text-left md:gap-20 mx-auto mt-14">
                        {
                            service.subjects.map( ( subject ) => {
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
                        <span className="text-black">Buy {service.title} package</span>
                    </ButtonMailTo>
                </div>

            </div>
        </>
    )
}

export default ServiceContent;