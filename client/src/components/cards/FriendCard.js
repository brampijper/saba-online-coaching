import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';

const FriendCard = ({item, cardStyles = ""}) => {
    const { 
        image: { localFile, alternativeText: alt }, 
        description: { data: { description }},
        tool: { title: toolTitle, slug: toolSlug },
        name, job_title, slug, struggles, strengths
     } = item;

    const image = getImage(localFile);
    
    return (
        <div className={`border-opacity-90 border-2 sm:border-4 border-s-gold bg-white shadow-md rounded-lg flex flex-col 
            max-w-7xl lg:flex-row
            ${cardStyles}
        `}>
            <div className="relative lg:flex-[0_1_400px]">
                <GatsbyImage 
                    image={image} 
                    alt={alt} 
                    className="h-full w-auto rounded-md" 
                    objectFit="cover"
                    objectPosition="50% 100%"
                />
                
                <h4 className="absolute flex flex-col bottom-0 w-full py-2 px-8 
                    text-white text-center bg-s-gold bg-opacity-80
                    md:px-12 lg:px-0
                ">
                    {job_title}
                </h4>
            </div>

            <div className="max-w-prose space-y-4 p-2 sm:p-6
                lg:flex-[1_0_50%] lg:p-12
            ">
                <header className="flex flex-col w-full gap-1 sm:flex-row">
                    <h4>{`${name}'s favorite tool:`}</h4>
                    <Link className="underline block" to={`/${toolSlug}`}>
                        {toolTitle}
                    </Link>
                </header>
                
                <ReactMarkdown 
                    children={description} 
                    className="space-y-2" 
                />

                <h4>Strengths</h4>
                {strengths}

                <h4>Struggles</h4>
                {struggles}

                <Link 
                    className="underline block" 
                    to={`/${slug}`}
                >
                    {`Read more about ${name}`}
                </Link>
            </div>
        </div>
    )
}

export default FriendCard;