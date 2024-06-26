import React from "react";
import { Link } from "react-router-dom";

const menu1 = ["Shorts", "Subscription"];
const menu2 = ["History", "Watch Later", "Library", "Liked Videos"];

const Sidebar = () => {
  return (
    <div className="col-span-2">
      <ul className="my-1 mx-4 px-3">
        <Link to="/">
          <li className="p-2 text-justify hover:bg-slate-200 hover:rounded-lg hover:text-black ">
            Home
          </li>
        </Link>
        {menu1.map((item) => (
          <li
            key={item}
            className="p-2 text-justify hover:bg-slate-200 hover:rounded-lg hover:text-black "
          >
            {item}
          </li>
        ))}
        <hr className="divide-gray-500 m-2" />
        {menu2.map((item) => (
          <li
            key={item}
            className="p-2 text-justify hover:bg-slate-200 hover:rounded-lg hover:text-black "
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
