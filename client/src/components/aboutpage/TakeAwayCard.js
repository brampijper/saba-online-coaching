import React from "react";
import { Link } from "gatsby";
import ReactMarkdown from 'react-markdown';

const TakeAwayCard = ({serviceID, takeaway}) => {
    return (
        <Link to={`/services#${serviceID}`} className="h-auto rounded-lg bg-white shadow-xl relative p-8 space-y-6">
            <h4>{takeaway.title}</h4>
            <ReactMarkdown children={takeaway.text.data.text} className="max-w-prose" />
        </Link>
    )
}

export default TakeAwayCard;