import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UplodeServices from "../pages/UplodeServices";
import Home from "./Home";
import Agriculture from "../Component/Dashboard/Agriculture";
import ContactUs from "../Component/Dashboard/ContactUs";
import DepartmentChart from "../pages/DepartmentChart";
import UserSidebar from "../Component/UserDashbord/UserSidebar";
import UserDashbords from "../Component/UserDashbord/UserDashbords"; // Ensure this is imported correctly
import UserNotification from "../Component/UserDashbord/UserNotification";
import Dashbord from "../pages/Dashbord"; // Ensure this is imported correctly
import ServicesList from "../Component/UserDashbord/ServicesList";
import AadharService from "../Component/Dashboard/AadharService";
import PanService from "../Component/Dashboard/PanService";
import AdminSidebar from "../Component/AdminDashboard/AdminSidebar";
import UserDetails from "../Component/AdminDashboard/UserDetails";
import UserInfo from "../Component/AdminDashboard/UserInfo";
import DepartmentPage from "../Component/AdminDashboard/DepartmentPage";
import AddCertificateForm from "../Component/AdminDashboard/AddCertificateForm";
import AddDepartmentForm from "../Component/AdminDashboard/AddDepartmentForm";

const AppRoutes = () => {
  const token = localStorage.getItem('token');
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


 // Fetch user data from API
 useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/profile', {
          method: 'GET',
          headers: {
            Authorization: token,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const userData = await response.json();
        // console.log('this approutes',userData.role); // Here we can get the user role (ADMIN/NORMAL)
        setUserRole(userData.role);
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  } else {
    setLoading(false);
  }
}, []);


  // Loading and error handling
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Routes>
      {/* Redirect logic based on token */}
      {!token && <Route path="*" element={<Home />} />}
      {token && <Route path="/" element={<Navigate to="/dashboard" />} />}
      {token && userRole ==='admin' &&<Route path="/" element={<Navigate to="/Admindashboard" />} />}

      {/* Main application routes */}
      <Route path="/dashbord" element={<Dashbord />}>
        <Route index element={<DepartmentChart />} />
        <Route path="Agriculture" element={<Agriculture />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="aadhar" element={<AadharService />} />
        <Route path="pan" element={<PanService />} />
      </Route>

      <Route path="service" element={<UplodeServices />} />

      {/* User dashboard route */}
      {token && (
        <Route path="/userdashboard" element={<UserSidebar />}>
          {/* Nested dashboard routes */}
          <Route index element={<UserDashbords />} /> {/* Default dashboard content */}
          <Route path="notifications" element={<UserNotification />} />
          <Route path="serviceslist" element={<ServicesList />} />
        </Route>
      )}


       {/* AdminDashboard route */}
      {token && userRole?.toLowerCase() === 'admin' && (
        <Route path="/Admindashboard" element={<AdminSidebar />}>
          {/* Nested dashboard routes */}
          <Route index element={<UserDetails />} />
          <Route path="user/:userId" element={<UserInfo />} /> {/* Route for User Info page */}
          <Route path="department" element={<DepartmentPage />} />
          <Route path="addCertificate" element={<AddCertificateForm />} />
          <Route path="addDepartment" element={<AddDepartmentForm />} />
        </Route>
      )}

      {/* Fallback route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
