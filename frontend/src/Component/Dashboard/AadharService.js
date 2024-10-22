import React from "react";
import { useNavigate } from "react-router-dom";

const AadharService = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate('/userdashboard/serviceslist');
  };

  return (
    <div className="flex flex-col w-full items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full md:max-w-4xl p-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6 text-center">
          Aadhaar Services
        </h2>

       

        {/* Cards Container */}
        <div className="gap-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto ml-6 mt-6">
          {/* First Card - New Aadhaar Card */}
          <div className="border  w-full max-w-xs border-gray-600 rounded-lg shadow-sm mb-4">
            <div className="bg-gradient-to-r from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                New Aadhar Card<span className="ml-1">›</span>
              </h2>
              <p className="text-gray-600 mt-2">
                Update the documents in your Aadhaar database for better service delivery and accurate Aadhaar based authentication.
              </p>
              <a
                onClick={handlenavigate}
                className="text-blue-600 font-medium cursor-pointer mt-2 inline-block hover:underline"
              >
                New Aadhar Card
              </a>
            </div>
          </div>

          {/* Second Card - Update Aadhaar Address */}
          <div className="border w-full max-w-xs border-gray-600 rounded-lg shadow-sm mb-4">
            <div className="bg-gradient-to-r from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Update Aadhar Address<span className="ml-1">›</span>
              </h2>
              <p className="text-gray-600 mt-2">
                View your Aadhaar and your Bank account linking status. Aadhaar Linking status is fetched from NPCI Server.
              </p>
              <a
                onClick={handlenavigate}
                className="text-blue-600 font-medium mt-2 cursor-pointer inline-block hover:underline"
              >
                Update Aadhar Address
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadharService;
