import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import UplodeServices from '../pages/UplodeServices';
import Dashboard from '../pages/Dashbord'; // Renamed from Dashbord to Dashboard
import Sidebar from '../Component/Sidebar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to login */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Corrected spelling */}
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Login />} /> {/* Default Route */}
      <Route path="/service" element={<UplodeServices />} />
      <Route path="/sidebar" element={<Sidebar />} />
    </Routes>
  );
};

export default AppRoutes;
