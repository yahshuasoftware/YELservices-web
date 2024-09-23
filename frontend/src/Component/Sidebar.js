import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiChevronRight, BiSearch, BiHomeAlt, BiBarChartAlt2, BiBell, BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""} flex`}>
      {/* Sidebar */}
      <nav className={`bg-white dark:bg-ocean-800 min-h-screen w-${isClosed ? "20" : "64"} p-4 transition-width duration-300`}>
        <header className="relative flex items-center justify-between">
          <div className={`flex items-center ${isClosed ? "hidden" : ""}`}>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-ocean-900 dark:text-ocean-100">YSL Services</span>
              <span className="text-sm text-ocean-500 dark:text-ocean-400">user profile</span>
            </div>
          </div>
          <button onClick={toggleSidebar} className="bg-ocean-600 text-white p-2 rounded-full">
            <BiChevronRight className={`transform ${isClosed ? "" : "rotate-180"}`} />
          </button>
        </header>

        <div className="mt-8 space-y-6">
          <div className="relative">
            <input type="text" placeholder="Search..." className={`bg-ocean-100 text-ocean-700 dark:bg-ocean-700 dark:text-ocean-300 rounded-md px-4 py-2 w-full ${isClosed ? "hidden" : ""}`} />
            <BiSearch className="absolute top-2 left-2 text-ocean-600 dark:text-ocean-400" />
          </div>

          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <BiHomeAlt className="text-xl text-ocean-600 dark:text-ocean-400" />
              {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Dashboard</span>}
            </li>
            <li className="flex items-center space-x-4">
              <BiBarChartAlt2 className="text-xl text-ocean-600 dark:text-ocean-400" />
              {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Services list</span>}
            </li>
            <li className="flex items-center space-x-4">
              <BiBell className="text-xl text-ocean-600 dark:text-ocean-400" />
              {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">Notifications</span>}
            </li>
          </ul>
        </div>

        <div className="mt-auto">
          <button className="flex items-center space-x-4 w-full py-2 text-md font-medium text-ocean-800 dark:text-ocean-100">
            <BiLogOut className="text-xl text-ocean-600 dark:text-ocean-400" />
            {!isClosed && <span>Logout</span>}
          </button>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-4">
              {isDarkMode ? <FaSun className="text-xl text-ocean-600 dark:text-ocean-400" /> : <FaMoon className="text-xl text-ocean-600 dark:text-ocean-400" />}
              {!isClosed && <span className="text-md font-medium text-ocean-800 dark:text-ocean-100">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>}
            </div>
            <button onClick={toggleDarkMode} className="relative inline-flex items-center bg-ocean-200 dark:bg-ocean-600 rounded-full p-1 w-10 h-5">
              <span className={`w-4 h-4 bg-white dark:bg-ocean-800 rounded-full transform ${isDarkMode ? "translate-x-5" : ""} transition-transform`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <section className="flex-1 p-6">
        <div className="text-xl font-semibold text-ocean-800 dark:text-ocean-100">Dashboard Sidebar</div>
      </section>
    </div>
  );
};

export default Sidebar;
