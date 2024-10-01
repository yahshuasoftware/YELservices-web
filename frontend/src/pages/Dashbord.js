import React from "react";
// import { toast } from "react-toastify";
// import {  useNavigate } from "react-router-dom";
import Agriculture from "../Component/Dashboard/Agriculture";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
// import DepartmentChart from "./DepartmentChart"


const Dashbord = () => {

  return (
    <>
    
      <div>
        <div><Navbar/></div>          
          <div>          
            <Agriculture />
            {/* <DepartmentChart/>  */}
        </div>
        <div><Footer/></div>
      </div>
    </>
  );
};

export default Dashbord;
