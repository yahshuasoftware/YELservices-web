// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//     return (
//       <div className="w-64 h-[95vh] bg-blue-800 text-white top-0 left-0 overflow-y-auto">
//         <ul className="space-y-2 py-4">
//           <li className="px-4 py-2 hover:bg-blue-500 text-left">
//             <Link className="block " >Home</Link>
        
//           </li>
//           <li className="px-4 py-2 text-left hover:bg-blue-500 bg-orange-400">
//           <Link className="block " to="">Department Notified Services</Link>
//           </li>
//           <li className="px-4 py-2 hover:bg-blue-500 text-left">
//           <Link className="block " to="contact-us">Contact Us</Link>
//           </li>
          
//           <li className="px-4 py-2 hover:bg-blue-500 text-left">
//           <Link className="block " to="aadhar">Aadhar Services</Link>
          
//           </li>
//           <li className="px-4 py-2 hover:bg-blue-500 text-left">
//           <Link className="block " to="pan">Pan Card Services</Link>
          
//           </li>
//           <li className="px-4 py-2 hover:bg-blue-500 text-left">
//           <Link  to="election"  className="block ">
//               Election Card
//               </Link>
//           </li>
//           <li className="px-4 py-2 hover:bg-blue-500 text-left">
//             <Link to="ration" className="block">
//           Ration Card
//           </Link>
//           </li>
//           <li className="px-4 py-2 hover:bg-blue-500 text-left">
//           <Link className="block " to="Agriculture">Agriculture</Link>
//             </li>
//         </ul>
//       </div>
//     );
//   };

// export default Sidebar;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(null); // State to track the active link

  const handleLinkClick = (index) => {
    setActiveLink(index); // Update the active link when clicked
  };

  return (
    <div className="w-64 h-[95vh] bg-[#075985] text-white top-0 left-0 overflow-y-auto">
      <ul className="space-y-2 py-4">
        <li
          className={`px-4 py-2 text-left ${
            activeLink === 0 ? "bg-orange-400" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick(0)}
        >
          <Link className="block" >
            Home
          </Link>
        </li>
        <li
          className={`px-4 py-2 text-left ${
            activeLink === 1 ? "bg-orange-400" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick(1)}
        >
          <Link className="block" to="">
            Department Notified Services
          </Link>
        </li>
        <li
          className={`px-4 py-2 text-left ${
            activeLink === 2 ? "bg-orange-400" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick(2)}
        >
          <Link className="block" to="contact-us">
            Contact Us
          </Link>
        </li>
        <li
          className={`px-4 py-2 text-left ${
            activeLink === 3 ? "bg-orange-400" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick(3)}
        >
          <Link className="block" to="aadhar">
            Aadhar Card Services
          </Link>
        </li>
        <li
          className={`px-4 py-2 text-left ${
            activeLink === 4 ? "bg-orange-400" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick(4)}
        >
          <Link className="block" to="pan">
            Pan Card Services
          </Link>
        </li>
        <li
          className={`px-4 py-2 text-left ${
            activeLink === 5 ? "bg-orange-400" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick(5)}
        >
          <Link className="block" to="election">
            Election Card
          </Link>
        </li>
        <li
          className={`px-4 py-2 text-left ${
            activeLink === 6 ? "bg-orange-400" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick(6)}
        >
          <Link className="block" to="ration">
            Ration Card
          </Link>
        </li>
        <li
          className={`px-4 py-2 text-left ${
            activeLink === 7 ? "bg-orange-400" : "hover:bg-blue-500"
          }`}
          onClick={() => handleLinkClick(7)}
        >
          <Link className="block" to="Agriculture">
            Agriculture
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
