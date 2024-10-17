import React from "react";
import { FaChild, FaUser, FaBriefcase, FaPhoneAlt, FaTachometerAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
        <ul className="pl-2 pr-2 grid grid-cols-4 md:grid-cols-8 bg-gray-300">
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><IoMdHome /></span> Home
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaChild /></span> ABOUT RTS COMMISSION
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaUser /></span> DEPARTMENT NOTIFIED SERVICES
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaBriefcase /></span> EASE OF DOING BUSINESS
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaBriefcase /></span> SERVICES INFORMATION
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaPhoneAlt /></span> CONTACT US
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaUser /></span> SEWA KENDRA
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs md:text-sm lg:text-base">
            <span className="m-1"><FaTachometerAlt /></span> DASHBOARD
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
