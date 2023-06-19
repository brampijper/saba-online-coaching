import React from "react";

const ToolBenefitCard = ({ benefit }) => {
    const { 
        title, 
        // description: { data: { description }} 
    } = benefit

    return (
        <div className="flex flex-col justify-center text-neutral-950 border-2 border-slate-700 shadow-md rounded-lg p-4 w-full text-center min-h-[9rem] h-auto lg:px-12
        ">
            <h4>{title}</h4>
            {/* <ReactMarkdown
                className=""
                children={description}
            /> */}
        </div>
    )
}

export default ToolBenefitCard