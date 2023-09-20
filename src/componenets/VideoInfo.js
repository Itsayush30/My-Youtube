import React from "react";
import VideoDescription from "./VideoDescription";
import { useState, useEffect } from "react";
import { VIDEO_API, YOUTUBE_VIDEO_API } from "../Utils/contants";
import { useSearchParams } from "react-router-dom";

const VideoInfo = () => {
  const [searchParams] = useSearchParams();

  const desiredId = searchParams.get("v");
  console.log(searchParams.get("v"));

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(VIDEO_API + desiredId);
    const json = await data.json();
    console.log(data.json);
    setVideos(json.items[0]);
  };

  return (
    <div className="flex flex-wrap">
      <VideoDescription info={videos} />
    </div>
  );
};

export default VideoInfo;
