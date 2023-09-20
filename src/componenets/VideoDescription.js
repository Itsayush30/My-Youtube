/*import React from "react";

const VideoDescription = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
  <div>
    <li className="font-bold">{title}</li>
    <li>{channelTitle}</li>
    <li>{publishedAt}</li>
    <li>{viewCount}</li>
  </div>
  );
};

export default VideoDescription; */

import React from "react";
import { calculateTimeAgo, formatNumber } from "../Utils/contants";

const VideoDescription = ({ info }) => {
  console.log(info);

  //optional chaining is very important
  return (
    <div className="m-2">
      <div className="m-2">
        <p className="font-extrabold text-xl">{info?.snippet?.title}</p>
        <p className="text-gray-500">{info?.snippet?.channelTitle}</p>
      </div>
      <div className=" m-2 p-2 border border-black bg-slate-100 rounded-md">
        <div className="flex font-semibold">
        <p>{formatNumber(info?.statistics?.viewCount)}</p>
        <p className="ml-3">{calculateTimeAgo(info?.snippet?.publishedAt)}</p>
        </div>
        <p>{info?.snippet?.description}</p>
      </div>
    </div>
  );
};

export default VideoDescription;
