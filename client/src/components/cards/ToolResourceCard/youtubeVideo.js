import React from "react";
import YouTube from "react-youtube";
import GetYouTubeId from "../../../utils/GetYoutubeID";

export default function YoutubeVideo({url}) {

  const youtubeId = GetYouTubeId(url)

  const opts = {
    width: '100%',
    height: 'auto'
  }
  
  return (
    <>
      <YouTube videoId={youtubeId} opts={opts} />
    </>
  )
}