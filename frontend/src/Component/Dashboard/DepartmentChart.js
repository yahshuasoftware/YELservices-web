import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-800 text-white fixed top-0 left-0 overflow-y-auto">
      <ul className="space-y-1 py-4">
        <li className="px-4 py-2 text-left">
          <a href="/1" className="block hover:bg-blue-600">
            Home
          </a>
        </li>
        <li className="px-4 py-2 text-left bg-orange-400">
          <a href="#" className="block hover:bg-blue-600">
            Department Notified Services
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="/contact-us" className="block hover:bg-blue-600">
            Contact Us
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="#" className="block hover:bg-blue-600">
            Agriculture
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="#" className="block hover:bg-blue-600">
            Department of Animal Husbandry
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="#" className="block hover:bg-blue-600">
            Co-operation Marketing
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="#" className="block hover:bg-blue-600">
            Divyang Kalyan Department
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="#" className="block hover:bg-blue-600">
            Finance Department
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="#" className="block hover:bg-blue-600">
            Food & Public Distribution
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="#" className="block hover:bg-blue-600">
            Forest Department
          </a>
        </li>
        <li className="px-4 py-2 text-left">
          <a href="#" className="block hover:bg-blue-600">
            Higher & Technical Education
          </a>
        </li>
      </ul>
    </div>
  );
};

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
      service: "Certificate of Resldence in Hilly Area",
      days: 7,
      officer: "Tahsildar",
      firstAppeal: "Sub-Divisional Officer",
      secondAppeal: "Additional Collector",
      available: "Yes",
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
            Department Notified Services
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
