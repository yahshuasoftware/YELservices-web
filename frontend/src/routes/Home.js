import React from 'react';
import ServicesAvailable from '../Component/Services/ServicesAvailable';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex-grow px-5 h-auto lg:h-[85vh] bg-[url('../public/images/image.jpeg')] bg-cover bg-center gap-2 grid grid-cols-1 lg:grid-cols-2">
        <div className='mt-4 '>
          <ServicesAvailable />
        </div>
        <div>
          <Routes>
            <Route path="*" element={<Login />} /> {/* Default Route */}
            <Route path="/" element={<Navigate to="/login" />} />{" "}
            {/* Redirect root to login */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
