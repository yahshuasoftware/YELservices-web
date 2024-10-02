import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
      <div className="w-64 h-screen bg-blue-800 text-white top-0 left-0 overflow-y-auto">
        <ul className="space-y-1 py-4">
          <li className="px-4 py-2 text-left">
            <Link className="block hover:bg-blue-600" >Home</Link>
        
          </li>
          <li className="px-4 py-2 text-left bg-orange-400">
          <Link className="block hover:bg-blue-600" to="dashbord">Department Notified Services</Link>
          </li>
          <li className="px-4 py-2 text-left">
          <Link className="block hover:bg-blue-600" to="contact-us">Contact</Link>
          </li>
          <li className="px-4 py-2 text-left">
          <Link className="block hover:bg-blue-600" to="Agriculture">Agriculture</Link>
            </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
              Department of Animal Husbandry
            </a>
          </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
              Co-operation Marketing
            </a>
          </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
              Divyang Kalyan Department
            </a>
          </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
              Finance Department
            </a>
          </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
              Food & Public Distribution
            </a>
          </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
              Forest Department
            </a>
          </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
              Higher & Technical Education
            </a>
          </li>
        </ul>
      </div>
    );
  };

export default Sidebar;
