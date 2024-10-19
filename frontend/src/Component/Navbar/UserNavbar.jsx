import { FaUser, FaTachometerAlt, FaBars, FaTimes } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SummaryApi from "../../common/Apis";

const UserNavbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close of navbar
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged out successfully!", {
      position: "top-right",
    });

    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(SummaryApi.profile.url, {
            method: SummaryApi.profile.method,
            headers: {
              Authorization: token,
            },
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
          }

          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    } else {
      setLoading(false);
    }
  }, []);

  // Toggle the navbar open/close state
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <nav className="bg-gray-300 shadow-md">
        {/* Hamburger Menu for Small Screens */}
        <div className="flex items-center justify-around p-4 md:hidden">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={toggleNavbar} className="text-xl">
            {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
          </button>
        </div>

        {/* Navbar links container */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-row justify-between items-center p-4 md:p-0 transition-transform duration-300 ease-in-out`}
        >
          <li className="flex items-center justify-center p-2 hover:bg-orange-700 hover:text-white text-xs md:text-sm">
            <span className="mr-1">
              <IoMdHome />
            </span>
            <Link to="/" className="no-underline">
              Home
            </Link>
          </li>

          <li className="flex items-center justify-center p-2 hover:bg-orange-700 hover:text-white text-xs md:text-sm">
            <span className="mr-1">
              <FaUser />
            </span>
            {user?.name || "User"}
          </li>

          <Link to="/userdashboard" className="w-full sm:w-auto">
            <li className="flex items-center justify-center p-2 hover:bg-orange-700 hover:text-white text-xs md:text-sm">
              <span className="mr-1">
                <FaTachometerAlt />
              </span>
              DASHBOARD
            </li>
          </Link>

          <li className="flex items-center justify-center p-2">
            <button
              onClick={handleLogout}
              className="bg-red-800 text-white py-2 px-4 rounded hover:bg-black text-xs md:text-sm"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;
