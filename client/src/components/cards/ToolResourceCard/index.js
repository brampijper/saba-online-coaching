import React from "react";
import ReactMarkdown from 'react-markdown';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { faPodcast, faBlog, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import YoutubeVideo from "./youtubeVideo";

const ToolResourceCard = ({resource}) => {
  const { 
      title, 
      description: { data: { description}},
      url
  } = resource

  const icons = {
      Youtube: faYoutube,
      Podcasts: faPodcast,
      Blogs: faBlog,
      [`App's`]: faAppStoreIos,
  }

  const displayYoutubeVideo = title === "Youtube" ? <YoutubeVideo url={url} /> : null

  return (
    <article className={`flex flex-col
      rounded p-6 shadow-2xl space-y-7 h-min
      text-neutral-900 bg-gradient-to-r from-zinc-50 to-zinc-100
      md:px-8`}
    >
      <div className="flex flex-row gap-3">
        <FontAwesomeIcon 
          className="text-gray-800 text-2xl" 
          icon={icons[title]} 
        />

        <h4 className={`decoration-4 text-md align-text-bottom`}>
            {title}
        </h4>
      </div>

      { displayYoutubeVideo }

      <a 
        className="relative"
        href={url} 
        title={`Go to ${title}`}
        target="_blank" 
        rel="noopener noreferrer" 
      >
        <ReactMarkdown 
          className={`mb-4 border rounded p-4 hover:bg-gray-100`}
          linkTarget="_blank"
          children={description} 
        />

        <FontAwesomeIcon 
          className="text-gray-600 absolute right-3 top-3"
          icon={faUpRightFromSquare}
        />
      </a>
    </article>
  )
}

export default ToolResourceCard