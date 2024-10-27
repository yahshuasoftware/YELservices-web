import React, { useState } from "react";
import { FaChild, FaUser, FaBriefcase, FaPhoneAlt, FaTachometerAlt, FaBars } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      
      {/* Hamburger Icon */}
      <div className="md:hidden p-2" onClick={toggleMenu}>
        <FaBars className="text-xl cursor-pointer" />
      </div>
      
      


      {/* Full Navbar for larger screens and mobile screens */}
      <div className={`md:block ${isOpen ? "block" : "hidden"} text-sm sm:text-xs md:text-base lg:text-lg`}>
        
      

        <ul className="pl-1 pr-1 grid grid-cols-1 md:grid-cols-8 bg-gray-300 pt-6 pb-5">
          
          <Link to="/" className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base lg:mx-7">
            <span className="m-1"><IoMdHome /></span> Home
          </Link>
         
          <Link className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt- pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaBriefcase /></span> SERVICES 
          </Link>
          <Link to="/contactus" className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaPhoneAlt /></span> CONTACT US
          </Link>
          <Link to="/sevakendra" className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaUser /></span> SEWA KENDRA
          </Link>
          <Link to="dashboard" className="hover:bg-orange-700 hover:text-white  flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaTachometerAlt /></span> DASHBOARD
          </Link>
          <Link to="/careers" className="hover:bg-orange-700 hover:text-white  flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaTachometerAlt /></span> CAREERS
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;