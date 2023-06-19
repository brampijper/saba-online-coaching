import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ToolInstructionCard = ({ instruction }) => {
    const { title, description: { data: { description }} } = instruction

    return (
        <div className="flex flex-col gap-1">
            <h4>{`${title}`}</h4>
            <ReactMarkdown
                className=""
                children={description}
            />
        </div>
    )
}

export default ToolInstructionCard