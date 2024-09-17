import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import UplodeServices from '../pages/UplodeServices';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to login */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Login />} /> {/* Default Route */}
      <Route path="/service" element={<UplodeServices/>} />
    </Routes>
  );
};

export default AppRoutes;
