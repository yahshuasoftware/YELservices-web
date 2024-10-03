import { FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div>
      <div className="justify-between">
        <ul className="pl-10 pr-10 grid md:grid-cols-8 grid-cols-4 lg:grid-cols-8 bg-gray-300">
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-4 pb-4 font-thin text-xs h-16">
            <span className="m-1"><IoMdHome /></span>Home
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-4 pb-4 font-thin text-xs h-16">
            <span className="m-1"><FaPhoneAlt /></span>CONTACT US
          </li>
          <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-4 pb-4 font-thin text-xs h-16">
            <span className="m-1"><FaUser /></span>User Name
          </li>
          <Link to="/userdashboard">
            <li className="hover:bg-orange-700 hover:text-white flex items-center justify-center pt-4 pb-4 font-thin text-xs h-16">
              <span className="m-1"><FaTachometerAlt /></span>DASHBOARD
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default UserNavbar;
