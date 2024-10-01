import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UplodeServices from "../pages/UplodeServices";
import Dashbord from "../pages/Dashbord";
import Home from "./Home";
import Agriculture from "../Component/Dashboard/Agriculture";
import ContactUs from "../Component/Dashboard/ContactUs";
import DepartmentChart from "../pages/DepartmentChart"
import UserSidebar from "../Component/UserSidebar"

const token = localStorage.getItem('token');
const AppRoutes = () => {
  return (
    <>
          <Routes>
            {!token && <Route path="*" element={<Home />} />} 
            {/* If no token, show Home route */}
            {token && <Route path="/" element={<Navigate to="/dashbord" />} />} 
            {/* If token exists, redirect to dashboard */}
            <Route path="*" element={<Home/>}/>
            {/* <Route path="/dashbord" element={<Dashbord />} /> */}
            <Route path="/service" element={<UplodeServices />} />
            <Route path="/departmentChart" element={<DepartmentChart/>} /> 
            <Route path="/Agriculture" element={<Agriculture/>} />
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/usersidebar" element={<UserSidebar/>}/>
            
          </Routes>
     </>
  );
};

export default AppRoutes;
