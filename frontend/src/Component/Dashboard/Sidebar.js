import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-800 text-white fixed top-0 left-0 overflow-y-auto">
      <ul className="space-y-1 py-4">
        <li className="px-4 py-2 text-left">
          <Link to="/1" className="block hover:bg-blue-600">
            Home
          </Link>
        </li>
        <li className="px-4 py-2 text-left bg-orange-400">
          <Link to="/dashboard" className="block hover:bg-blue-600">
            Department Notified Services
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="/contact-us" className="block hover:bg-blue-600">
            Contact Us
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="/agriculture" className="block hover:bg-blue-600">
            Agriculture
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="#" className="block hover:bg-blue-600">
            Department of Animal Husbandry
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="#" className="block hover:bg-blue-600">
            Co-operation Marketing
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="#" className="block hover:bg-blue-600">
            Divyang Kalyan Department
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="#" className="block hover:bg-blue-600">
            Finance Department
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="#" className="block hover:bg-blue-600">
            Food & Public Distribution
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="#" className="block hover:bg-blue-600">
            Forest Department
          </Link>
        </li>
        <li className="px-4 py-2 text-left">
          <Link to="#" className="block hover:bg-blue-600">
            Higher & Technical Education
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
