import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { BiChevronRight, BiHomeAlt, BiBarChartAlt2, BiLogOut } from "react-icons/bi";
import { Usercontext } from "../../Store/UserContext";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import SummaryApi from "../../common/Apis";

import AdminUserManagement from "./AdminUserManagement";

const SuperAdminSidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Sidebar open/close state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle
  const [user, setUser] = useState(null); // Store user data
  const [loadingUserData, setLoadingUserData] = useState(true); // Loading state for user data
  const [fetchError, setFetchError] = useState(null); // Error state
  const navigate = useNavigate(); // For navigation

  // Fetch user data for Super Admin
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchSuperAdminData = async () => {
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
          console.error("Error fetching super admin profile:", error.message);
          setFetchError(error.message);
        } finally {
          setLoadingUserData(false);
        }
      };

      fetchSuperAdminData();
    } else {
      setLoadingUserData(false);
    }
  }, []);

  // Handle Super Admin logout
  const handleSuperAdminLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully!', {
      position: "top-right",
    });
    navigate('/home');
  };

  // Toggle Sidebar state (open/close)
  const toggleSidebarState = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Toggle Dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Loading and error handling
  if (loadingUserData) return <div>Loading...</div>;
  if (fetchError) return <div>Error: {fetchError}</div>;

  return (
    <div className={`${isDarkMode ? "dark" : ""} flex`}>
      <nav className={`bg-white dark:bg-gray-800 min-h-screen transition-all duration-300 ${isSidebarCollapsed ? "w-20" : "w-64"} p-4`}>
        <header className="relative flex items-center justify-between">
          <div className={`flex items-center ${isSidebarCollapsed ? "hidden" : ""}`}>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Super Admin Panel</span>
              {user && <span className="text-sm text-gray-500 dark:text-gray-400">{user.name}</span>}
            </div>
          </div>
          <button onClick={toggleSidebarState} className="bg-gray-600 text-white w-10 p-2 rounded-full">
            <BiChevronRight className={`transform transition-transform duration-300 ${isSidebarCollapsed ? "" : "rotate-180"}`} />
          </button>
        </header>

        <div className="mt-8 space-y-6">
          <ul className="space-y-4">
            <li>
              <Link to="/superadmindashboard" className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
                <BiHomeAlt className="text-xl text-gray-600 dark:text-gray-400" />
                {!isSidebarCollapsed && <span className="text-md font-medium text-gray-800 dark:text-white">Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/superadmindashboard/allcertificates" className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
                <BiBarChartAlt2 className="text-xl text-gray-600 dark:text-gray-400" />
                {!isSidebarCollapsed && <span className="text-md font-medium text-gray-800 dark:text-white">All Certificates</span>}
              </Link>
            </li>
            <li>
              <Link to="/superadmindashboard/department" className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md">
                <BiBarChartAlt2 className="text-xl text-gray-600 dark:text-gray-400" />
                {!isSidebarCollapsed && <span className="text-md font-medium text-gray-800 dark:text-white">Manage Departments</span>}
              </Link>
            </li>
            <li>
              <button onClick={handleSuperAdminLogout} className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md w-full">
                <BiLogOut className="text-xl text-gray-600 dark:text-gray-400" />
                {!isSidebarCollapsed && <span className="text-md font-medium text-gray-800 dark:text-white">Logout</span>}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <section className="flex-1 p-6">
        <div className="text-xl font-semibold text-gray-800 dark:text-white"> Super Admin Dashboard </div>
        <Usercontext.Provider value={user}>
          <Routes>
            <Route path="/" element={<AdminUserManagement />} />
           
          </Routes>
        </Usercontext.Provider>
      </section>
    </div>
  );
};

export default SuperAdminSidebar;
