import React from 'react'
import Head from "./Head";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from 'react-redux';

const Body = () => {

  const isSidebarOpen = useSelector(store => store.app2.isMenuOpen);

  if(!isSidebarOpen) return null;

  return (
    <div>
      <Head />
      <div className="grid grid-flow-col mt-1">
        {isSidebarOpen && <Sidebar />}
        <MainContainer />
      </div>
    </div>
  );
}

export default Body;
