import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoInfo from "./VideoInfo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CloseMenu());
  });

  return (
    <div className="w-full">
      <div className="flex px-5">
        <div>
          <iframe
            width="1120"
            height="630"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <VideoInfo/>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
