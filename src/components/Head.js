import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_SUGGETION_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchQuery) {
        console.log(searchCache);
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSugsestions();
        }
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(SEARCH_SUGGETION_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className="grid px-4 grid-flow-col">
      <div className="flex col-span-2 items-center">
        <img
          src="/menu-icon.png"
          className="h-7 mr-6 pl-4 cursor-pointer"
          alt="menu icon"
          onClick={() => toggleMenuHandler()}
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
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border rounded-r-full w-28 py-2 px-5 text-lg bg-slate-100 hover:bg-slate-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute w-[33rem] bg-white shadow-lg rounded-b-lg items-center justify-center ml-56">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="p-3 hover:bg-slate-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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