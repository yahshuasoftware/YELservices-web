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
              Document Update <span className="ml-1">›</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Update the documents in your Aadhaar database for better service
              delivery and accurate Aadhaar based authentication.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-2 inline-block hover:underline"
            >
              Document update
            </a>
          </div>
        </div>
        {/* Second Card - verify Aadhaar number */}
        <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
          <div className="bg-gradient-to-r from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Verify Aadhaar <span className="ml-1">›</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Aadhaar number can be verifed to acertain if the Aadhaar number is
              valid and is not deactivated.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-2 inline-block hover:underline"
            >
              Verify an Aadhaar Number
            </a>
          </div>
        </div>

        {/* Third Card - Check Aadhaar Update Status */}
        <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
          <div className="bg-gradient-to-r from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Check Aadhaar Update Status <span className="ml-1">›</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Have already sent a request to get your address updated in
              Aadhaar?
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-2 inline-block hover:underline"
            >
              Check Aadhaar Update Status
            </a>
          </div>
        </div>

        {/*  Fourth Card - Verify Registered mobile or email id */}
        <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
          <div className="bg-gradient-to-r from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Verify Registered mobile or email id
              <span className="ml-1">›</span>
            </h2>
            <p className="text-gray-600 mt-2">
              You can verify your email address and mobile number that has been
              declared at the time of enrolment or during latest Aadhaar detail
              update.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-2 inline-block hover:underline"
            >
              Verify Registered mobile or email id
            </a>
          </div>
        </div>

        {/*  Fifth Card - Aadhaar Linking Status */}
        <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
          <div className="bg-gradient-to-r from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Aadhaar Linking Status<span className="ml-1">›</span>
            </h2>
            <p className="text-gray-600 mt-2">
              View your Aadhaar and your Bank account linking status. Aadhaar
              Linking status is fetched from NPCI Server.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium mt-2 inline-block hover:underline"
            >
              Check Aadhaar Validity
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AadharService;