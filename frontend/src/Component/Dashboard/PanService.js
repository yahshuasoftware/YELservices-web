import React from "react";
import { useNavigate } from "react-router-dom";

const PanService = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/userdashboard/serviceslist");
  };

  return (
    <div className="flex flex-col w-full items-center justify-center p-4"> {/* Main Container */}
      <div className="w-full md:max-w-4xl p-4"> {/* Inner Container */}
        <h2 className="text-3xl font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6 text-center">
          Application for allotment of PAN
        </h2>
        
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-4 p-4">
          {/* Form 49A Section for Citizens of India */}
          <div className="border border-gray-600 rounded-lg shadow-md p-6 mb-6 bg-white"> {/* Card styling */}
            <h2 className="text-lg font-semibold mb-2">
              Application for  New PAN Card
            </h2>
            {/* Removed ul tag and its content */}
            <a
              onClick={handlenavigate}
              className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            >
              Apply
            </a>
          </div>

          {/* Change/Correction in PAN Data Section */}
          <div className="border border-gray-600 rounded-lg shadow-md p-6 mb-6 bg-white"> {/* Card styling */}
            <h2 className="text-lg font-semibold mb-2">
              Change/Correction in PAN Data
            </h2>
            {/* Removed ul tag and its content */}
            <a
              onClick={handlenavigate}
              className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanService;
