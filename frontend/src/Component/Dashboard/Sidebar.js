import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the sidebar when a menu item is clicked
  };

  return (
    <div className="flex">
      {/* Open Button for Mobile and Desktop */}
      <button
        className="p-2 bg-blue-500 text-white rounded md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 md:relative md:w-64 bg-blue-800 text-white overflow-y-auto transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center px-4 py-2 border-b border-blue-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          {/* Close button for mobile view */}
          <button
            className="text-white md:hidden"
            onClick={toggleSidebar}
          >
            &times; {/* Close icon */}
          </button>
        </div>
        <ul className="space-y-2 py-4">
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block" to="/" onClick={handleMenuItemClick}>
              Home
            </Link>
          </li>
          <li className="px-4 py-2 text-left hover:bg-blue-500 bg-orange-400">
            <Link className="block" to="" onClick={handleMenuItemClick}>
              Department Notified Services
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block" to="contact-us" onClick={handleMenuItemClick}>
              Contact Us
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block" to="aadhar" onClick={handleMenuItemClick}>
              Aadhar Services
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block" to="pan" onClick={handleMenuItemClick}>
              Pan Card Services
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block" to="election" onClick={handleMenuItemClick}>
              Election Card
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block" to="ration" onClick={handleMenuItemClick}>
              Ration Card
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block" to="Agriculture" onClick={handleMenuItemClick}>
              Agriculture
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
