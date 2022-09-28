import React from "react";
import { Link } from "gatsby";
import MarkdownView from 'react-showdown';

const TakeAwayCard = ({serviceID, title, takeaways}) => {
    return (
        <Link to={`/services#${serviceID}`} className="h-auto rounded-lg bg-white shadow-xl relative p-8 space-y-6">
            <h4>{title}</h4>
            <MarkdownView markdown={takeaways} className="max-w-prose" />
        </Link>
    )
}

export default TakeAwayCard;