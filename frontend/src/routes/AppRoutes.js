import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UplodeServices from "../pages/UplodeServices";
import Dashbord from "../pages/Dashbord";
import Home from "./Home";
import DepartmentChart from "../pages/DepartmentChart";
import Agriculture from "../Component/Dashboard/Agriculture";
import UserSidebar from "../Component/UserSidebar";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} /> 
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to login */}
        <Route path="/dashboard" element={<Dashbord />} /> {/* Consistent path for dashboard */}
        <Route path="/service" element={<UplodeServices />} />
        <Route path="/department-chart" element={<DepartmentChart />} /> {/* Updated path */}
        <Route path="/agriculture" element={<Agriculture />} /> {/* Make path names lowercase */}
        <Route path="/usersidebar" element={<UserSidebar />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
