import React from "react";
import Footer from "../Component/Footer/Footer";
import { Outlet} from "react-router-dom";
import Sidebar from "../Component/Dashboard/Sidebar";
import UserNavbar from "../Component/Navbar/UserNavbar";

const Dashbord = () => {
  return (
    <>
      <div>
        <div>
          
          <UserNavbar/>
        </div>
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div>
            <Outlet/>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashbord;
