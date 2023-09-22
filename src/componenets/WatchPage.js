import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseMenu } from "../Utils/appSlice";
import LiveChat from "./LiveChat";
import VideoPreview from "./VideoPreview";

const WatchPage = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CloseMenu());
  });

  return (
    <div className="md:flex md:flex-wrap md:justify-center md:w-full mt-4">
      <VideoPreview />
      <div className="hidden md:block w-1/4  rounded-xl border h-[30rem] shadow-sm">
        <p className="border-b p-2">Live Chat</p>
        <div className=" bg-slate-50">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
