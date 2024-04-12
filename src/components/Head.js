import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';

const Head = () => {

  const dispatch = useDispatch();

  const clickToggleMenu = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid px-4 grid-flow-col">
      <div className="flex col-span-2 items-center">
        <img
          src="/menu-icon.png"
          className="h-7 mr-6 pl-4 cursor-pointer"
          alt="menu icon"
          onClick={clickToggleMenu}
        />
          <img
            src="/youtube-logo.png"
            className="h-16 cursor-pointer"
            alt="youtube logo"
          />
      </div>
      <div className="flex col-span-8 items-center p-4 justify-center">
        <input
          type="text"
          className="border py-2 px-5 rounded-l-full w-1/2 text-lg"
          placeholder="search"
        />
        <button className="border rounded-r-full w-28 h-full bg-slate-100 hover:bg-slate-200">
          🔍
        </button>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <img
          src="/profile-user.png"
          className="h-9 col-span-2 cursor-pointer"
          alt="user logo"
        />
      </div>
    </div>
  );
}

export default Head;