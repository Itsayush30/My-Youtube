import React from "react";
import { calculateTimeAgo, formatNumber } from "../Utils/contants";

const VideoCard = ({ info }) => {
  //console.log(info);

  const { snippet, statistics } = info ?? {};
  const { channelTitle, title, thumbnails, publishedAt } = snippet ?? {};
  const { viewCount } = statistics ?? {};

  return (
    <div className="w-72 p-2">
      <img className="rounded-xl" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold p-2">{title}</li>
        <li className=" px-2 text-xs font-semibold text-gray-500">
          {channelTitle}
        </li>
        <div className="flex">
          <li className=" px-2 text-xs font-semibold text-gray-500">
            {formatNumber(viewCount)} Views{" "}
          </li>
          <li className="text-xs font-semibold text-gray-500 ">•</li>
          <li className="text-xs font-semibold text-gray-500 ml-2">
            {calculateTimeAgo(publishedAt)}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;

/*import React from 'react';

const VideoCard = ({info}) => {
   console.log(info);



  return (
    <div className='w-72 p-2 m-3 shadow-lg'>
    
    </div>
  )
};

export default VideoCard;*/
