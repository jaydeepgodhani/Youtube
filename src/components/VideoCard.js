import React from 'react'

const VideoCard = ({info}) => {
  return (
    <div className='p-2 m-1 flex-1 basis-1/4'>
      <img src={info.thumbnails.medium.url} alt="video card" className='rounded-lg' />
      <ul className='w-1'>
        <li className='font-semibold'>{info.title}</li>
        <li>{info.channelTitle}</li>
      </ul>
    </div>
  );
}

export default VideoCard;
