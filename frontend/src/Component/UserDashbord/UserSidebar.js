import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
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

  return (
    <div className={` ${isDarkMode ? "dark" : ""} flex`}>
      <nav className={`bg-white dark:bg-ocean-800 min-h-screen transition-all duration-300 ${isClosed ? "w-20" : "w-64"} p-4`}>
        <header className="relative flex items-center justify-between">
          <div className={`flex items-center ${isClosed ? "hidden" : ""}`}>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-ocean-900 dark:text-ocean-100">YEL Services</span>
              {user && <span className="text-sm text-ocean-500 dark:text-ocean-400">{user.name}</span>}
            </div>
          </div>
          <button onClick={toggleSidebar} className="bg-zinc-600 text-white w-10 p-2 rounded-full">
            <BiChevronRight className={`transform transition-transform duration-300 ${isClosed ? "" : "rotate-180"}`} />
          </button>
        </header>

        <div className="mt-8 space-y-6">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/dashbord"
                className={({ isActive }) =>
                  `flex items-center space-x-4 p-2 rounded-md ${isActive ? 'bg-teal-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-ocean-700'}`
                }
              >
                <BiHomeAlt className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Home</span>}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/userdashboard"
                className={({ isActive }) =>
                  `flex items-center space-x-4 p-2 rounded-md ${isActive ? 'bg-teal-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-ocean-700'}`
                }
              >
                <BiHomeAlt className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Dashboard</span>}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/userdashboard/serviceslist"
                className={({ isActive }) =>
                  `flex items-center space-x-4 p-2 rounded-md ${isActive ? 'bg-teal-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-ocean-700'}`
                }
              >
                <BiBarChartAlt2 className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Services list</span>}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/userdashboard/notifications"
                className={({ isActive }) =>
                  `flex items-center space-x-4 p-2 rounded-md ${isActive ? 'bg-teal-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-ocean-700'}`
                }
              >
                <BiBell className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Notifications</span>}
              </NavLink>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-ocean-700 p-2 rounded-md w-full"
              >
                <BiLogOut className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Logout</span>}
              </button>
            </li>

            {user?.role === 'admin' && (
              <li>
                <NavLink
                  to="/Admindashboard"
                  className={({ isActive }) =>
                    `flex items-center space-x-4 p-2 rounded-md ${isActive ? 'bg-teal-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-ocean-700'}`
                  }
                >
                  <BiBell className="text-xl text-ocean-600 dark:text-ocean-400" />
                  {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Admin Dashboard</span>}
                </NavLink>
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
