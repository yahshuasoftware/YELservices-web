import React from 'react'
import ServicesAvailable from '../Component/Services/ServicesAvailable'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="p-10 pl-28 h-[80vh] bg-[url('../public/images/BG.jpg')] bg-cover bg-center gap-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
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
      
    </div>
  )
}

export default Home
