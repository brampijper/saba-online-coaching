import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ToolInstructionCard = ({ instruction, index }) => {
    const { title, description: { data: { description }} } = instruction

    return (
        <div className="flex flex-col gap-1">
            <h4>{`${index}. ${title}`}</h4>
            <ReactMarkdown
                className="max-w-prose"
                children={description}
            />
        </div>
    )
}

export default ToolInstructionCard