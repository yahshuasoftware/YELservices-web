import React from "react";
import Sidebar from "../Component/Dashboard/Sidebar";

const DepartmentChart = () => {
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
    {
      id: 3,
      service: "Income Certificate",
      days: 15,
      officer: "Nayab Tahsildar",
      firstAppeal: "Tahsildar",
      secondAppeal: "Sub-Divisional Officer",
      available: "Yes",
    },
    {
      id: 4,
      service: "Non Creamy Layer Certificate",
      days: 21,
      officer: "Sub-Divisional Officer",
      firstAppeal: "Additional Collector",
      secondAppeal: "Collector",
      available: "No",
    },
    {
      id: 5,
      service: "Temporary Residence Certificate",
      days: 7,
      officer: "Tahsildar",
      firstAppeal: "Sub-Divisional Officer",
      secondAppeal: "Collector",
      available: " Yes",
    },
    {
      id: 6,
      service: "Senior Citizen Certificate",
      days: 7,
      officer: "Tahsildar",
      firstAppeal: "Sub-Divisional Officer",
      secondAppeal: "Additional Collector",
      available: "Yes",
    },
    {
      id: 7,
      service: "Landless Labour Certificate",
      days: 15,
      officer: "Tahsildar",
      firstAppeal: "Sub-Divisional Officer",
      secondAppeal: "Additional Collector",
      available: "Yes",
    },
    {
      id: 8,
      service: "Agriculturist Certificate",
      days: 15,
      officer: "Tahsildar",
      firstAppeal: "Sub-Divisional Officer",
      secondAppeal: "Additional Collector",
      available: "Yes",
    },
    {
      id: 9,
      service: "Permission for Cultural Programme",
      days: 7,
      officer: "Tahsildar and Taluka Executive Magistrate",
      firstAppeal: "Sub-Divisional Magistrate",
      secondAppeal: "Additional District Magistrate",
      available: "Yes",
    },
    {
      id: 10,
      service: "Small Land Holder Certificate",
      days: 15,
      officer: "Tahsildar",
      firstAppeal: "Sub-Divisional Officer",
      secondAppeal: "Additional Collector",
      available: "Yes",
    },
    {
      id: 11,
      service: "Certificate of Residence in Hilly Area",
      days: 7,
      officer: "Tahsildar",
      firstAppeal: "Sub-Divisional Officer",
      secondAppeal: "Additional Collector",
      available: "Yes",
    },
    // Add more services here...
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Component */}
      
      
      {/* Main Content */}
      <div className="flex-grow container mx-auto overflow-y-auto h-screen p-4 md:ml-64"> {/* Add margin-left to accommodate the sidebar */}
        <div className="bg-white shadow-lg rounded-lg p-3">
          <h2 className="text-2xl font-bold text-center text-white bg-blue-500 py-2 mb-6 rounded-md">
            Department Notified Services
          </h2>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white table-auto">
              <thead>
                <tr>
                  <th className="py-2 px-4 border border-black bg-gray-300 text-xs md:text-sm lg:text-base">
                    Sr. No
                  </th>
                  <th className="py-2 px-4 border bg-blue-200 text-gray-700 text-xs md:text-sm lg:text-base">
                    Public Service
                  </th>
                  <th className="py-2 px-4 border bg-blue-200 text-gray-700 text-xs md:text-sm lg:text-base sm:table-cell">
                    Time limit (Days)
                  </th>
                  <th className="py-2 px-4 border bg-blue-200 text-gray-700 text-xs md:text-sm lg:text-base md:table-cell">
                    Designated Officer
                  </th>
                  <th className="py-2 px-4 border bg-blue-200 text-gray-700 text-xs md:text-sm lg:text-base lg:table-cell">
                    First Appellate Officer
                  </th>
                  <th className="py-2 px-4 border bg-blue-200 text-gray-700 text-xs md:text-sm lg:text-base xl:table-cell">
                    Second Appellate Officer
                  </th>
                  <th className="py-2 px-4 border bg-blue-200 text-gray-700 text-xs md:text-sm lg:text-base">
                    Available in Aaple Sarkar
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id} className="text-xs md:text-sm lg:text-base">
                    <td className="py-2 px-4 border text-center">{index + 1}</td>
                    <td className="py-2 px-4 border">{item.service}</td>
                    <td className="py-2 px-4 border text-center hidden sm:table-cell">{item.days}</td>
                    <td className="py-2 px-4 border hidden md:table-cell">{item.officer}</td>
                    <td className="py-2 px-4 border hidden lg:table-cell">{item.firstAppeal}</td>
                    <td className="py-2 px-4 border hidden xl:table-cell">{item.secondAppeal}</td>
                    <td className="py-2 px-4 border text-center">{item.available}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChart;
