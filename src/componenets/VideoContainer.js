import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import MainShimmer from "./MainShimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {videos.length === 0 ? (
        <MainShimmer />
      ) : (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
