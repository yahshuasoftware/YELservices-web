import React from "react";
import Sidebar from "../Component/Dashboard/Sidebar";

import { jwtDecode } from 'jwt-decode';

import { useState, useEffect } from 'react';

const DepartmentChart = () => {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  console.log(user);

  const data = [
    {
      id: 1,
      service: "Age, Nationality, and Domicile Certificate",
      days: 15,
      officer: "Tahsildar",
      firstAppeal: "Sub-Divisional Officer",
      secondAppeal: "Additional Collector",
      available: "Yes",
    },
    {
      id: 2,
      service: "Caste Certificate",
      days: 21,
      officer: "Sub-Divisional Officer / Dy. Collector",
      firstAppeal: "Additional Collector",
      secondAppeal: "Collector",
      available: "No",
    },
    // Add more services here...
  ];

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow container mx-auto my-10 ml-64 overflow-y-auto h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-white bg-blue-500 py-2 mb-6 rounded-md">
            Department Notified Services {user && user.email}
          </h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-solid border-black bg-gray-300">
                  Sr. No
                </th>
                <th className="py-2 px-4 border bg-blue-200 text-gray-700">
                  Public Service
                </th>
                <th className="py-2 px-4 border bg-blue-200 text-gray-700">
                  Time limit (Days)
                </th>
                <th className="py-2 px-4 border bg-blue-200 text-gray-700">
                  Designated Officer
                </th>
                <th className="py-2 px-4 border bg-blue-200 text-gray-700">
                  First Appellate Officer
                </th>
                <th className="py-2 px-4 border bg-blue-200 text-gray-700">
                  Second Appellate Officer
                </th>
                <th className="py-2 px-4 border bg-blue-200 text-gray-700">
                  Available in Aaple Sarkar
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border text-center">{index + 1}</td>
                  <td className="py-2 px-4 border">{item.service}</td>
                  <td className="py-2 px-4 border text-center">{item.days}</td>
                  <td className="py-2 px-4 border">{item.officer}</td>
                  <td className="py-2 px-4 border">{item.firstAppeal}</td>
                  <td className="py-2 px-4 border">{item.secondAppeal}</td>
                  <td className="py-2 px-4 border text-center">
                    {item.available}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChart;
