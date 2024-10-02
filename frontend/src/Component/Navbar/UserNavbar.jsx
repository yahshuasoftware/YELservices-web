
import {  FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
const UserNavbar = () => {

    return (
      <div>
        <div className="justify-between"> 
          <ul className="pl-10 pr-10 grid md:grid-cols-8 grid-cols-4 lg:grid-cols-8 bg-gray-300">
            <li className=" hover:bg-orange-700 hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs"><span className="m-1"><IoMdHome/></span>Home</li>
            <li className=" hover:bg-orange-700  hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs" ><span className="m-1"><FaPhoneAlt/></span>CONTACT US</li>
            <li className=" hover:bg-orange-700  hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs" ><span className="m-1"><FaUser/> </span>user name </li>
            <li className=" hover:bg-orange-700  hover:text-white flex items-center justify-center pt-2 pb-2 font-thin text-xs" ><span className="m-1"><FaTachometerAlt/></span>DASHBOARD</li>
          </ul>
        </div>
      </div>
    );
  };

  export default UserNavbar;