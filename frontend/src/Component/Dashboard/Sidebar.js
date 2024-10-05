import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
      <div className="w-64 h-[95vh] bg-blue-800 text-white top-0 left-0 overflow-y-auto">
        <ul className="space-y-2 py-4">
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block " >Home</Link>
        
          </li>
          <li className="px-4 py-2 text-left hover:bg-blue-500 bg-orange-400">
          <Link className="block " to="">Department Notified Services</Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
          <Link className="block " to="contact-us">Contact Us</Link>
          </li>
          
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
          <Link className="block " to="aadhar">Aadhar Services</Link>
          
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
          <Link className="block " to="pan">Pan Card Services</Link>
          
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
          <Link  className="block ">
              Election Card
              </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
            <Link className="block">
          income Certificate
          </Link>
          </li>
          <li className="px-4 py-2 hover:bg-blue-500 text-left">
          <Link className="block " to="Agriculture">Agriculture</Link>
            </li>
        </ul>
      </div>
    );
  };

export default Sidebar;
