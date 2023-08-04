import React from "react";
import ReactMarkdown from 'react-markdown';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { faPodcast, faBlog, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import YoutubeVideo from "./YoutubeVideo";

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
    <article className={`flex flex-col border m-4 bg-gray-100 shadow-md
      rounded p-6 space-y-7 h-min
      text-neutral-900
      md:px-8`}
    >
      <div className="flex flex-row gap-3">
        <FontAwesomeIcon 
          className="fa-2xl text-gray-800 text-2xl" 
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
          className={`mb-4 border rounded p-4 bg-gray-50 hover:bg-white`}
          linkTarget="_blank"
          children={description} 
        />

        <FontAwesomeIcon 
          className="fa-xs text-gray-600 absolute right-3 top-3"
          icon={faUpRightFromSquare}
        />
      </a>
    </article>
  )
}

export default ToolResourceCard