import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for hamburger and close

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className="relative">
      {/* Hamburger button for small screens */}
      <button onClick={toggleSidebar} className="text-white p-4 md:hidden">
        {isOpen ? <FaTimes /> : <FaBars />} {/* Show icon based on state */}
      </button>

      {/* Sidebar */}
      <div className={`w-64 h-[95vh] bg-blue-800 text-white top-0 left-0 overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:h-full`}>
        <ul className="space-y-2 py-4">
          <li className="px-4 py-2 text-left">
            <NavLink 
              className={({ isActive }) => 
                isActive ? "inline-block px-2 py-1 " : "inline-block px-2 py-1 hover:bg-blue-500"
              }
              to=""
            >
              Home
            </NavLink>
          </li>
          <li className="px-4 py-2 text-left">
            <NavLink 
              className={({ isActive }) => 
                (isActive || location.pathname === "/department-notified-services") ? 
                "inline-block px-2 py-1 bg-teal-500" : "inline-block px-2 py-1 hover:bg-blue-500"
              }
              to=""
            >
              Department Notified Services
            </NavLink>
          </li>
          <li className="px-4 py-2 text-left">
            <NavLink 
              className={({ isActive }) => 
                isActive ? "inline-block px-2 py-1 bg-teal-500" : "inline-block px-2 py-1 hover:bg-blue-500"
              }
              to="contact-us"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="px-4 py-2 text-left">
            <NavLink 
              className={({ isActive }) => 
                isActive ? "inline-block px-2 py-1 bg-teal-500" : "inline-block px-2 py-1 hover:bg-blue-500"
              }
              to="aadhar"
            >
              Aadhar Services
            </NavLink>
          </li>
          <li className="px-4 py-2 text-left">
            <NavLink 
              className={({ isActive }) => 
                isActive ? "inline-block px-2 py-1 bg-teal-500" : "inline-block px-2 py-1 hover:bg-blue-500"
              }
              to="pan"
            >
              Pan Card Services
            </NavLink>
          </li>
          <li className="px-4 py-2 text-left">
            <NavLink 
              className={({ isActive }) => 
                isActive ? "inline-block px-2 py-1 bg-teal-500" : "inline-block px-2 py-1 hover:bg-blue-500"
              }
              to="election"
            >
              Election Card
            </NavLink>
          </li>
          <li className="px-4 py-2 text-left">
            <NavLink 
              className={({ isActive }) => 
                isActive ? "inline-block px-2 py-1 bg-teal-500" : "inline-block px-2 py-1 hover:bg-blue-500"
              }
              to="ration"
            >
              Ration Card
            </NavLink>
          </li>
          <li className="px-4 py-2 text-left">
            <NavLink 
              className={({ isActive }) => 
                isActive ? "inline-block px-2 py-1 bg-teal-500" : "inline-block px-2 py-1 hover:bg-blue-500"
              }
              to="agriculture"
            >
              Agriculture
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
