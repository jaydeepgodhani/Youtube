import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import {data} from "../utils/fakeData";

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    // const result = await fetch(POPULAR_VIDEOS);
    // const json = await result.json();
    const json = data;
    setVideos(json.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if(!videos) return null;

  return (
    <div className='m-2 flex flex-wrap'>
      {videos.map(video =>
        <VideoCard key={video.id} info={video.snippet} />
      )}
    </div>
  )
}

export default VideoContainer;