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
    <article className={`flex flex-col border border-slate-500 max-w-[30rem]
      rounded p-6 space-y-7 h-auto
      text-neutral-900
      md:m-4 md:px-8`}
    >
      <div className="flex flex-row gap-3 items-center">
        <FontAwesomeIcon 
          className="fa-xl text-gray-800" 
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
          className={`mb-4 border rounded p-6 bg-gray-50 hover:bg-white`}
          children={description}
          components={{ a: ({node, ...props}) => <p {...props}></p>}} // filter out a tags.
        />

        <FontAwesomeIcon 
          className="fa-xs text-gray-600 absolute right-2 top-2"
          icon={faUpRightFromSquare}
        />
      </a>
    </article>
  )
}

export default ToolResourceCard