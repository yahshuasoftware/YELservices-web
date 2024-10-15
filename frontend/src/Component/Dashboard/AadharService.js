import React from "react";

const AadharService = () => {
  return (
    <>
      <h2 className="text-3xl flex justify-center font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6">
          Aadhaar Services  </h2>
    <div className="flex justify-center w-full ml-5 items-center">

      <div className=" gap-2 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-6">
        {/* First Card - Document Update */}
        <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
          <div className="bg-gradient-to-r  from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              New Aadhaar<span className="ml-1">›</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Update the documents in your Aadhaar database for better service
              delivery and accurate Aadhaar based authentication.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-2 inline-block hover:underline"
            >
              New Aadhaar
            </a>
          </div>
        </div>
        {/* Second Card - verify Aadhaar number */}
        

        {/* Third Card - Check Aadhaar Update Status */}
        <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
          <div className="bg-gradient-to-r from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
            Update Aadhaar Address <span className="ml-1">›</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Have already sent a request to get your address updated in
              Aadhaar?
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-2 inline-block hover:underline"
            >
               Update Aadhaar Address
            </a>
          </div>
        </div>

        {/*  Fourth Card - Verify Registered mobile or email id */}
        

        {/*  Fifth Card - Aadhaar Linking Status */}
       
      </div>
    </div>
    </>
  );
};

export default AadharService;