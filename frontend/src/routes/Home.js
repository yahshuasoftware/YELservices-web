import React from 'react';
import ServicesAvailable from '../Component/Services/ServicesAvailable';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-4 bg-[url('../public/images/BG.jpg')] bg-cover bg-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Section: Services Available */}
          <div className="order-2 lg:order-1">
            <ServicesAvailable />
          </div>

          {/* Right Section: Routes (Login/Signup) */}
          <div className="order-1 lg:order-2">
            <Routes>
              <Route path="*" element={<Login />} /> {/* Default Route */}
              <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect root to login */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
