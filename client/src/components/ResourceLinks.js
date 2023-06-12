import React from "react";
import ReactMarkdown from 'react-markdown';

const ResourceLinks = ({resources}) => {
    const {
        youtubeLinks: { data: { youtubeLinks }},
        podcastLinks: { data: { podcastLinks }},
    } = resources

    return (
        <div className="bg-s-turquoise-light rounded-lg px-12 pb-12 pt-6 justify-self-end justify-between gap-y-8 sm:gap-y-4 h-auto self-center sm:max-w-sm">
            <h2 className="text-left text-sm pb-8 sm:text-md">
                Resources & links
            </h2>

            <section>
                <h4>Youtube</h4>
                <ReactMarkdown 
                    className="space-y-6 max-w-prose pb-4 text-xs flex flex-col" 
                    linkTarget="_blank"
                    children={youtubeLinks} 
                />
            </section>

            <section>
                <h4>Podcasts</h4>
                <ReactMarkdown 
                    className="space-y-6 max-w-prose pb-4 text-xs flex flex-col" 
                    linkTarget="_blank"
                    children={podcastLinks} 
                />
            </section>
        </div>
    )
}

export default ResourceLinks;
