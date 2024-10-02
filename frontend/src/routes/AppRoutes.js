import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UplodeServices from "../pages/UplodeServices";
import Dashbord from "../pages/Dashbord";
import Home from "./Home";
import Agriculture from "../Component/Dashboard/Agriculture";
import ContactUs from "../Component/Dashboard/ContactUs";
import DepartmentChart from "../pages/DepartmentChart";
import UserSidebar from "../Component/UserSidebar";

const token = localStorage.getItem("token");
const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* If no token, show Home route */}
        {!token ? (
          <Route path="/" element={<Home />} />
        ) : (
          // If token exists, redirect to dashboard
          <Route path="/" element={<Navigate to="/dashbord" />} />
        )}

        {/* Redirect any other routes to Home or Dashboard based on token */}
        <Route
          path="*"
          element={!token ? <Home /> : <Navigate to="/dashbord" />}
        />

        <Route path="/dashbord" element={<Dashbord />}>
          <Route index element={<DepartmentChart />} /> 
          <Route path="service" element={<UplodeServices />} />
          <Route path="Agriculture" element={<Agriculture />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="usersidebar" element={<UserSidebar />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
