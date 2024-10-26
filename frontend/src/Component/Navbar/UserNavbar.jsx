
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
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!", { position: "top-right" });
    navigate("/home");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(SummaryApi.profile.url, {
            method: SummaryApi.profile.method,
            headers: { Authorization: token },
          });

          if (!response.ok) {
            throw new Error(`Error ${response.status}`);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <nav className="bg-gray-300 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/images/YEL_LOGO_Nav.png"
          alt="YEL Seva Logo"
          className="w-12 h-auto object-contain mr-4"
        />
        <p className="font-bold text-lg mr-4">YEL-SEVA</p>

        <button className="text-2xl md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`md:flex space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-300 md:bg-transparent p-4 md:p-0 transition-transform duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="hover:bg-blue-300 hover:text-black flex items-center p-4 rounded-md text-sm">
            <IoMdHome className="mr-1" />
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-blue-300 hover:text-black flex items-center p-4 rounded-md text-sm">
            <FaUser className="mr-1" />
            <Link to="/profile">{user?.name}</Link>
          </li>

          {user?.role === "normal" && (
            <li className="hover:bg-blue-300 hover:text-black flex items-center p-4 rounded-md text-sm">
              <FaTachometerAlt className="mr-1" />
              <Link to="/userdashboard">DASHBOARD</Link>
            </li>
          )}
          {user?.role === "admin" && (
            <li className="hover:bg-blue-400 hover:text-black flex items-center p-4 rounded-md text-sm">
              <FaTachometerAlt className="mr-1" />
              <Link to="/admindashboard">Admin DASHBOARD</Link>
            </li>
          )}
          {user?.role === "superadmin" && (
            <Link to="/superAdmin">
              <li className="hover:bg-blue-400 hover:text-black flex items-center p-4 rounded-md text-sm">
                <FaTachometerAlt className="mr-1" />
                SuperAdmin
              </li>
            </Link>
            
          )}

        <Link to="/careers">
            <li className="hover:bg-blue-400 hover:text-black flex items-center p-4 rounded-md text-sm">
              <FaTachometerAlt className="mr-1" />
              CAREERS
            </li>
          </Link>
        </ul>
      </div>

      <button
        onClick={handleLogout}
        className="bg-gray-500 h-10 text-white py-2 px-4 rounded hover:bg-black"
      >
        Logout
      </button>
    </nav>
  );
};

export default UserNavbar;

