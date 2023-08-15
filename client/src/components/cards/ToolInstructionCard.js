import React, { forwardRef } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ToolInstructionCard = forwardRef(({ item, cardStyles = "", index }, ref) => {
    const { title, description: { data: { description }} } = item

    return (
        <div
            ref={ref} 
            className={`flex flex-col h-auto gap-1 bg-gray-50 p-6 ${cardStyles}`}
        >
            <h4>
                {`${index}. ${title}`}
            </h4>
            <ReactMarkdown
                className="max-w-prose"
                children={description}
            />
        </div>
    )
})

export default ToolInstructionCard