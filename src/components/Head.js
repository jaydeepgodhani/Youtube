import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_SUGGETION_API } from '../utils/constants';

const Head = () => {

  const [inputText, setInputText] = useState();
  const dispatch = useDispatch();

  const searchVideo = () => {
    console.log("11... video search in progress...");
    console.log(inputText);
  }

  useEffect(() => {
    const timer = setTimeout(()=> getSuggestions(inputText), 2000)
    return () => {clearTimeout(timer);}
  },[inputText])

  const clickToggleMenu = () => {
    dispatch(toggleMenu());
  }

  const getSuggestions = async(text) => {
    // const data = await fetch(SEARCH_SUGGETION_API + text);
    // const json = await data.json();
    console.log(text);
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
      <div className="col-span-8 p-4">
        <div className="w-full items-center justify-center flex">
          <input
            type="text"
            className="border py-2 px-5 rounded-l-full w-1/2 text-lg"
            placeholder="search"
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="border rounded-r-full w-28 py-2 px-5 text-lg bg-slate-100 hover:bg-slate-200"
            onClick={searchVideo}
          >
            🔍
          </button>
        </div>
        <div className="absolute w-[33rem] bg-white shadow-lg rounded-b-lg items-center justify-center ml-56">
          <ul>
            <li className="p-3 hover:bg-slate-100">🔍 hsdfsdfsdi</li>
          </ul>
        </div>
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