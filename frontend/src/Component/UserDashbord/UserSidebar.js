import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { BiChevronRight, BiHomeAlt, BiBarChartAlt2, BiBell, BiLogOut } from "react-icons/bi";
import UserDashbords from "./UserDashbords";
import UserNotification from "./UserNotification";
import { Usercontext } from "../../Store/UserContext";
import ServicesList from "./ServicesList";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import SummaryApi from "../../common/Apis";

const UserSidebar = () => {
  const [isClosed, setIsClosed] = useState(false); // Sidebar open/close state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Loading state for user data
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // Get the current location

  // Fetch user data from API
  useEffect(() => {
    const token = localStorage.getItem('token');
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
          const contentType = response.headers.get("content-type");
          if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Expected JSON, but got something else.");
          }

          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          console.error("Error fetching user profile:", error.message);
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

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully!', {
      position: "top-right",
    });
    navigate('/home');
  };

  // Toggle Sidebar state (open/close)
  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  // Toggle Dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Loading and error handling
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Get the current path for active link styling
  const currentPath = location.pathname;

  return (
    <div className={`${isDarkMode ? "dark" : ""} flex`}>
      <nav className={`bg-gray-700 text-white dark:bg-ocean-800 min-h-screen transition-all duration-300 ${isClosed ? "w-20" : "w-64"} p-4`}>
        <header className="relative flex items-center justify-between">
          <div className={`flex items-center ${isClosed ? "hidden" : ""}`}>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-ocean-900 dark:text-ocean-100">YEL-SEVA</span>
              {user && <span className="text-sm text-ocean-500 dark:text-ocean-400">{user.name}</span>}
            </div>
          </div>
          <button onClick={toggleSidebar} className="bg-black text-white w-10 p-2 rounded-full">
            <BiChevronRight className={`transform transition-transform duration-300 ${isClosed ? "" : "rotate-180"}`} />
          </button>
        </header>

        <div className="mt-8 space-y-6">
          <ul className="space-y-4">
            <li>
              <Link to="/dashbord" className={`flex items-center space-x-4 hover:text-black hover:bg-gray-100 dark:hover:bg-ocean-700 p-2 rounded-md ${currentPath === '/dashbord' ? 'bg-teal-500' : ''}`}>
                <BiHomeAlt className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Home</span>}
              </Link>
            </li>
            <li>
              <Link to="/userdashboard" className={`flex items-center space-x-4 hover:text-black hover:bg-gray-100 dark:hover:bg-ocean-700 p-2 rounded-md ${currentPath === '/userdashboard' ? 'bg-teal-500' : ''}`}>
                <BiHomeAlt className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/userdashboard/serviceslist" className={`flex items-center space-x-4 hover:text-black hover:bg-gray-100 dark:hover:bg-ocean-700 p-2 rounded-md ${currentPath === '/userdashboard/serviceslist' ? 'bg-teal-500' : ''}`}>
                <BiBarChartAlt2 className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Services list</span>}
              </Link>
            </li>
            <li>
              <Link to="/userdashboard/notifications" className={`flex items-center space-x-4 hover:text-black hover:bg-gray-100 dark:hover:bg-ocean-700 p-2 rounded-md ${currentPath === '/userdashboard/notifications' ? 'bg-teal-500' : ''}`}>
                <BiBell className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Notifications</span>}
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="flex items-center space-x-4 hover:text-black hover:bg-gray-100 dark:hover:bg-ocean-700 p-2 rounded-md w-full">
                <BiLogOut className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Logout</span>}
              </button>
            </li>

            {user?.role === 'admin' && (
              <li>
                <Link to="/Admindashboard" className={`flex items-center space-x-4 hover:text-black hover:bg-gray-100 dark:hover:bg-ocean-700 p-2 rounded-md ${currentPath === '/Admindashboard' ? 'bg-teal-500' : ''}`}>
                  <BiBell className="text-xl text-ocean-600 dark:text-ocean-400" />
                  {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">AdminDashboard</span>}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <section className="flex-1 p-6">
        <div className="text-xl font-semibold text-ocean-800 dark:text-ocean-100">Dashboard Sidebar</div>
        <Usercontext.Provider value={user}>
          <Routes>
            <Route path="/" element={<UserDashbords />} />
            <Route path="notifications" element={<UserNotification />} />
            <Route path="serviceslist" element={<ServicesList />} />
          </Routes>
        </Usercontext.Provider>
      </section>
    </div>
  );
};

export default UserSidebar;
