import React, { useEffect, useState } from "react";
import { COMMENTS_API, calculateTimeAgo } from "../Utils/contants";
import { useSearchParams } from "react-router-dom";

const Comment = ({ data }) => {
  return (
    <div className="flex  p-2 rounded-lg my-2">
      <img
        className="w-12 h-12 rounded-full"
        alt="user"
        src={data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
      />
      <div className="px-3">
        <div className="flex items-center">
          <p className="font-bold">
            {data?.snippet?.topLevelComment?.snippet?.authorDisplayName}
          </p>
          <p className="ml-2 text-xs text-gray-500 r">
            {calculateTimeAgo(
              data?.snippet?.topLevelComment?.snippet?.publishedAt
            )}
          </p>
        </div>
        <p>{data?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  //Disclaimer: Don't use indexes as keys
  //Comment reply not found in API
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  const [Commentss, setComments] = useState([]);

  const [searchParams] = useSearchParams();

  const VideoId = searchParams.get("v");

  useEffect(() => {
    getcomment();
  }, []);

  const getcomment = async () => {
    const data = await fetch(COMMENTS_API + VideoId);
    const json = await data.json();
    console.log(json.items);
    setComments(json.items);
  };

  return (
    <div className="m-5 p-2">
      <h1 className="text-l font-bold">{Commentss?.length} Comments</h1>
      <CommentList comments={Commentss} />
    </div>
  );
};

export default CommentsContainer;
