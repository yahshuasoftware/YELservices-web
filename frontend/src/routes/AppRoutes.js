import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UplodeServices from "../pages/UplodeServices";
import Home from "./Home";
import Agriculture from "../Component/Dashboard/Agriculture";
import ContactUs from "../Component/Dashboard/ContactUs";
import DepartmentChart from "../pages/DepartmentChart";
import UserSidebar from "../Component/UserDashbord/UserSidebar";
import UserDashbords from "../Component/UserDashbord/UserDashbords"; // Ensure this is imported correctly
import UserNotification from "../Component/UserDashbord/UserNotification";
import Dashbord from "../pages/Dashbord" // Ensure this is imported correctly
import ServicesList from "../Component/UserDashbord/ServicesList";
import AadharService from "../Component/Dashboard/AadharService";
import PanService from "../Component/Dashboard/PanService"

const AppRoutes = () => {
  const token = localStorage.getItem('token');

  return (
    <Routes>
      {/* Redirect logic based on token */}
      {!token && <Route path="*" element={<Home />} />}
      {token && <Route path="/" element={<Navigate to="/dashboard" />} />}

      {/* Main application routes */}
      <Route path="/dashbord" element={<Dashbord />}>
          <Route index element={<DepartmentChart />} /> 
         
          <Route path="Agriculture" element={<Agriculture />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="aadhar" element={<AadharService/>}/>
          <Route path="pan" element={<PanService/>}/>
          
        </Route>
      
        <Route path="service" element={<UplodeServices />} />

      {/* User dashboard route */}
      {token &&  <Route path="/userdashboard" element={<UserSidebar />}>
        {/* Nested dashboard routes */}
        <Route index element={<UserDashbords />} /> {/* Default dashboard content */}
        <Route path="notifications" element={<UserNotification />} />
        <Route path="serviceslist" element={<ServicesList />} />
      </Route>}

      {/* Fallback route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
