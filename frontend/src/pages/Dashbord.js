import React from 'react'
import Agriculture from '../Component/Dashboard/Agriculture'
import { toast } from 'react-toastify';
import UserSidebar from '../Component/UserSidebar'
import { useNavigate } from 'react-router-dom';

const Dashbord = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem('token');
  
    // Show success toast
    toast.success('Logged out successfully!', {
      position: "top-right",
    });
  console.log('redirecting to the page')
    // Redirect to login or home page
    navigate('/login'); // Adjust the route as needed
  };
  

  return (

    <>
     <button onClick={handleLogout} className="bg-red-800 text-white py-2 px-4  h-10 rounded hover:bg-black" >logout</button>

    <Agriculture/>
    <UserSidebar/>

    </>
  )
}

export default Dashbord