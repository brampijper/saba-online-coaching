import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const ToolBenefitCard = ({ benefit, index }) => {

    const { accentColor, baseColor } = useContext(ThemeContext)

    const { 
        title, 
        // description: { data: { description }} 
    } = benefit

    return (
        <div className="flex flex-col justify-center text-neutral-200 border-2 border-slate-50 bg-zinc-50 shadow-md rounded-lg p-4 w-full text-center min-h-[11rem] h-auto 
            lg:p-12 text-sm drop-shadow-lg"
            style={{ color: baseColor}}
        >
            <h4 className="drop-shadow-sm flex flex-col gap-2">
                <span className='text-base'>Benefit {index}:</span>
                {title}
            </h4>
            {/* <ReactMarkdown
                className=""
                children={description}
            /> */}
        </div>
    )
}

export default ToolBenefitCard