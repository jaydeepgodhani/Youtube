import React from 'react'

const VideoCard = ({info}) => {
  return (
    <div className='p-2 m-2 w-72'>
      <img src={info.thumbnails.medium.url} alt="video card" className='rounded-lg' />
      <ul>
        <li className='font-semibold '>{info.title}</li>
        <li>{info.channelTitle}</li>
      </ul>
    </div>
  );
}

export default VideoCard;
