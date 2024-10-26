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
      <div className="flex-grow items-center justify-center sm:flex-col px-10  h-auto lg:h-[90vh] bg-[url('../public/images/image.jpeg')] bg-cover bg-center gap-2 grid grid-cols-1 lg:grid-cols-2">
        <div >
          <ServicesAvailable />
        </div>
        <div>
          <Routes>
            {/* Redirect root to login */}
            <Route path="/" element={<Navigate to="/login" />} /> 
            {/* Define login and signup routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Default route if no match is found */}
            <Route path="*" element={<Navigate to="/login" />} /> 
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;