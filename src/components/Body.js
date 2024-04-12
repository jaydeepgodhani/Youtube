import React from "react";
import Head from "./Head";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app2.isMenuOpen);

  if (!isSidebarOpen) return null;

  return (
    <div>
      <div className="grid grid-cols-12 mt-1">
        {isSidebarOpen && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
