import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CloseMenu());
  },[] );

  return (
    <div className="px-5">
      <iframe
        width="1120"
        height="630"
        src={"https://www.youtube.com/embed/" + searchParams.get("v") }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
