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

import React, { useState } from "react";
import { calculateTimeAgo, formatNumber } from "../Utils/contants";

const VideoDescription = ({ info }) => {
  const [showDescription, setShowDescription] = useState(false);
  const {
    snippet: { channelTitle, title, description, publishedAt } = {},
    statistics: { viewCount } = {},
  } = info ?? {};

  /*/info ?? {} uses the nullish coalescing operator (??) 
  to ensure that if info is null or undefined, an empty object {} 
  is used as a fallback. This prevents potential "Cannot read property '...' 
  of null" or "Cannot read property '...' of undefined" errors when 
  destructuring the object.*/

  console.log(info);

  const truncatedDescription = showDescription
    ? description
    : `${description?.substring(0, 200)}...`;

  //optional chaining is very important
  return (
    <div className="m-2">
      <div className="m-2">
        <p className="font-extrabold text-xl">{title}</p>
        <p className="text-gray-500">{channelTitle}</p>
      </div>
      <div className=" m-2 p-2 md:w-3/5 md:mr-3 mb-4 border border-black bg-slate-100 rounded-md">
        <div className="flex font-semibold ">
          <p>{formatNumber(viewCount)}</p>
          <p className="ml-3">{calculateTimeAgo(publishedAt)}</p>
        </div>
        <div >
          <p>{truncatedDescription}</p>
          <button
            className="font-bold"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
