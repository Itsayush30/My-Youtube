 import React from 'react';

const VideoCard = ({info}) => {
   console.log(info);

   const { snippet, statistics } = info;
   const { channelTitle, title, thumbnails } = snippet;
   const { viewCount } = statistics;

  return (
    <div className='w-72 p-2 m-3 shadow-lg'>
    <img  className='rounded-xl' alt='thumbnail' src={thumbnails.medium.url}/> 
     <ul>
      <li className='font-bold p-2'>{title}</li>
      <li>{channelTitle}</li>
      <li>{viewCount} Views </li>
     </ul>
    </div>
  )
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



