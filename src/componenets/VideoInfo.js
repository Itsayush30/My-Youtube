import React, { useState, useEffect } from "react";
import VideoDescription from "./VideoDescription";
import { VIDEO_API, GOOGLE_API_KEY } from "../Utils/contants";
import { useSearchParams } from "react-router-dom";

const VideoInfo = () => {
  const [searchParams] = useSearchParams();
  const desiredId = searchParams.get("v");

  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    getVideos();
  }, [desiredId]); // Trigger getVideos when desiredId changes

  const getVideos = async () => {
    const data = await fetch(VIDEO_API + desiredId);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items[0]);

    // Extract channelId from videos and pass it to getChannel
    const channelId = json.items[0]?.snippet?.channelId;
    if (channelId) {
      getChannel(channelId);
    }
  };

  const getChannel = async (channelId) => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    const channelInfo = json?.items?.[0] ?? null;

    console.log(channelInfo);
    setChannel(channelInfo);
  };

  return (
    <div className="flex flex-wrap">
      <VideoDescription info={videos} channelInfo={channel} />
    </div>
  );
};

export default VideoInfo;
