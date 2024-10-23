import React, { useState } from "react";
import { FaChild, FaUser, FaBriefcase, FaPhoneAlt, FaTachometerAlt, FaBars } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <div className="md:hidden p-2" onClick={toggleMenu}>
        <FaBars className="text-xl cursor-pointer" />
      </div>

      {/* Full Navbar for larger screens and mobile screens */}
      <div className={`md:block ${isOpen ? "block" : "hidden"} text-sm sm:text-xs md:text-base lg:text-lg`}>
        <ul className="pl-1 pr-1 grid grid-cols-1 md:grid-cols-8 bg-gray-300">
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base lg:mx-7">
            <span className="m-1"><IoMdHome /></span> Home
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaChild /></span> ABOUT RTS COMMISSION
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-start  pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaUser /></span> DEPARTMENT NOTIFIED SERVICES
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-start  pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaBriefcase /></span> EASE OF DOING BUSINESS
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaBriefcase /></span> SERVICES INFORMATION
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaPhoneAlt /></span> CONTACT US
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaUser /></span> SEWA KENDRA
          </li>
          <li className="hover:bg-orange-700 hover:text-white  flex items-center justify-start pt-1 pb-1 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaTachometerAlt /></span> DASHBOARD
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
