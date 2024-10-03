import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
      <div className="w-64 h-[95vh] bg-blue-800 text-white top-0 left-0 overflow-y-auto">
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
          <Link className="block hover:bg-blue-600" to="aadhar">Aadhar Services</Link>
          
          </li>
          <li className="px-4 py-2 text-left">
          <Link className="block hover:bg-blue-600" to="pan">Pan Card Services</Link>
          
          </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
              Election Card
            </a>
          </li>
          <li className="px-4 py-2 text-left">
            <a href="/" className="block hover:bg-blue-600">
          income Certificate
            </a>
          </li>
          <li className="px-4 py-2 text-left">
          <Link className="block hover:bg-blue-600" to="Agriculture">Agriculture</Link>
            </li>
        </ul>
      </div>
    );
  };

export default Sidebar;
