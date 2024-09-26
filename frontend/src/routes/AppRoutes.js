import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UplodeServices from "../pages/UplodeServices";
import Dashbord from "../pages/Dashbord";
import Home from "./Home";
import DepartmentChart from "../pages/DepartmentChart";
import Agriculture from "../Component/Dashboard/Agriculture";

const token = localStorage.getItem('token');
const AppRoutes = () => {
  return (
    <>
          <Routes>
          {!token && <Route path="*" element={<Home />} />} 
      {/* If no token, show Home route */}
      {token && <Route path="*" element={<Navigate to="/dashbord" />} />} 
      {/* If token exists, redirect to dashboard */}
            <Route path="*" element={<Home/>}/>
            <Route path="/dashbords" element={<Dashbord />} />
            <Route path="/service" element={<UplodeServices />} />
            <Route path="/dashbord" element={<DepartmentChart/>} />
            <Route path="/Agriculture" element={<Agriculture/>} />
            
          </Routes>
        {/* </div>
      </div> */}
    </>
  );
};

export default AppRoutes;
