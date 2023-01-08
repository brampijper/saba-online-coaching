import React from "react";
import { Link } from "gatsby";
import ReactMarkdown from 'react-markdown';

const TakeAwayCard = ({serviceID, title, takeaways}) => {
    return (
        <Link to={`/services#${serviceID}`} className="h-auto rounded-lg bg-white shadow-xl relative p-8 space-y-6">
            <h4>{title}</h4>
            <ReactMarkdown children={takeaways} className="max-w-prose" />
        </Link>
    )
}

export default TakeAwayCard;