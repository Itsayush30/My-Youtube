import React from "react";
import VideoInfo from "./VideoInfo";
import CommentsContainer from "./CommentsContainer";
import { useSearchParams } from "react-router-dom";

const VideoPreview = () => {
    const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col md:w-3/5 md:mr-3 mb-4">
      <div>
        <iframe
          className="md:h-[30rem] h-60 w-full rounded-lg"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <VideoInfo />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default VideoPreview;
