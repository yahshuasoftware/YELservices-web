import React from "react";
import Footer from "../Component/Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Dashboard/Sidebar";
import UserNavbar from "../Component/Navbar/UserNavbar";

const Dashbord = () => {
  return (
    <>
      <div className="flex flex-col h-screen gap-1">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-10">
          <UserNavbar />
        </div>

        {/* Sidebar and Content Area */}
        <div className="flex flex-1 mt-16"> {/* Push content down under the navbar */}
          {/* Fixed Sidebar */}
          <div className="fixed top-14 left-0 w-64 h-[calc(100vh-64px)]"> {/* 64px height reserved for the navbar */}
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className=" p-10 w-full overflow-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        {/* <div className="fixed">
        <Footer />
        </div> */}
         
        
      </div>
    </>
  );
};

export default Dashbord;
