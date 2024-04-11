import React from 'react'

const buttonList = ['All', 'Music', 'Live', 'Cricket', 'Gaming', 'News', 'Songs', 'Motivation', 'Web Design', 'Jaydeep Godhani', 'Kapil Sharma', 'Trending', 'India', 'StudyIQ'];

const ButtonList = () => {
  return (
    <div className='m-2'>
      {buttonList.map((button) => (
        <button className="p-1.5 px-4 rounded-lg bg-slate-200 mx-2 text-sm hover:bg-slate-300">{button}</button>
      ))}
    </div>
  );
}

export default ButtonList;