import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import {data} from "../utils/fakeData";
import { Link } from "react-router-dom";

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
    <div className="flex flex-wrap flex-row">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video.snippet} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;