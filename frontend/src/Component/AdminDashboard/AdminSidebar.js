import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiChevronRight, BiSearch, BiHomeAlt, BiBarChartAlt2, BiBell, BiLogOut } from "react-icons/bi";
import UserDashbords from "../UserDashbord/UserDashbords";
import { Usercontext } from "../../Store/UserContext";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserInfo from "./UserInfo";
import DepartmentPage from "./DepartmentPage";
import AddCertificateForm from "./AddCertificateForm";
import AddDepartmentForm from "./AddDepartmentForm";
import SummaryApi from "../../common/Apis";

const UserSidebar = () => {
  const [isClosed, setIsClosed] = useState(false); // Sidebar open/close state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Loading state for user data
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // For navigation

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully!', {
      position: "top-right",
    });
    navigate('/home');
  };

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={`${isDarkMode ? "dark" : ""} flex`}>
      <nav className={`bg-white dark:bg-ocean-800 min-h-screen transition-all duration-300 ${isClosed ? "w-20" : "w-64"} p-4`}>
        <header className="relative flex items-center justify-between">
          <div className={`flex items-center ${isClosed ? "hidden" : ""}`}>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-ocean-900 dark:text-ocean-100">YEL Seva</span>
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
                to="/userdashboard"
                className={({ isActive }) => 
                  `flex items-center space-x-4 p-2 rounded-md ${isActive ? 'bg-teal-500' : 'hover:bg-gray-100 dark:hover:bg-ocean-700'}`
                }
              >
                <BiHomeAlt className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">User Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Admindashboard"
                className={({ isActive }) => 
                  `flex items-center space-x-4 p-2 rounded-md ${isActive ? 'bg-teal-500' : 'hover:bg-gray-100 dark:hover:bg-ocean-700'}`
                }
              >
                <BiHomeAlt className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Admin Dashboard</span>}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admindashboard/department"
                className={({ isActive }) => 
                  `flex items-center space-x-4 p-2 rounded-md ${isActive ? 'bg-teal-500' : 'hover:bg-gray-100 dark:hover:bg-ocean-700'}`
                }
              >
                <BiBarChartAlt2 className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Service Management</span>}
              </NavLink>
            </li>

            <li>
              <button onClick={handleLogout} className="flex items-center space-x-4 hover:bg-gray-100 dark:hover:bg-ocean-700 p-2 rounded-md w-full">
                <BiLogOut className="text-xl text-ocean-600 dark:text-ocean-400" />
                {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Logout</span>}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <section className="flex-1 p-6">
        <div className="text-xl font-semibold text-ocean-800 dark:text-ocean-100">Admin Dashboard</div>
        <Usercontext.Provider value={user}>
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/user/:userId" element={<UserInfo />} />
            <Route path="/department" element={<DepartmentPage />} />
            <Route path="/addCertificate" element={<AddCertificateForm />} />
            <Route path="/addDepartment" element={<AddDepartmentForm />} />
          </Routes>
        </Usercontext.Provider>
      </section>
    </div>
  );
};

export default UserSidebar;
