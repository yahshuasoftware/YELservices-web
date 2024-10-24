import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../../common/Apis";

const AadharService = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(SummaryApi.addDepartment.url); // Replace with your API endpoint
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);
  console.log("this is the array or depatment", departments);

  //   const handlenavigate = () => {
  //   navigate("/service");
  // };
  
  const handlenavigate = (certificatename) => {
    navigate("/service",{state:{certificatename}});
  };
  return (
    <>
      <h2 className="text-3xl flex justify-center font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6">
        Aadhaar Services{" "}
      </h2>
      <div className="flex justify-center w-full ml-5 items-center">
        <div className=" gap-2 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-6">
          <div className="department-container">
          {departments.map(
              (department) =>
                department.name === "Aadhar Services" && ( // Check if department name is "Aadhar Services"
                  <div key={department.id} className="flex gap-4">
                    {department.certificates && department.certificates.length > 0 ? (
                      department.certificates.map((certificate, index) => (
                        <div key={index}>
                          <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
                            <div className="p-4">
                              <h2 className="text-lg font-semibold text-gray-800">
                                {certificate.name}
                                <span className="ml-1">›</span>
                              </h2>
                              <a
                                onClick={() => handlenavigate(certificate.name)}  // Pass the function on click
                                className="mt-4 inline-block text-white bg-blue-500 cursor-pointer hover:bg-blue-600 px-4 py-2 rounded"
                              >
                                Apply
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No certificates available for this department.</p>
                    )}
                  </div>
                )
            )}
          </div>

          {/* First Card - Document Update */}
          {/* <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
            <div className="bg-gradient-to-r  from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                new Aadhar Services <span className="ml-1">›</span>
              </h2>

              <a
                onClick={handlenavigate}
                className="text-blue-600 font-medium cursor-pointer mt-2 inline-block hover:underline"
              >
                New Aadhar Card
              </a>
            </div>
          </div> */}

          {/*  Fifth Card - Aadhaar Linking Status */}
          {/* <div className="border w-96 border-gray-600 rounded-lg shadow-sm mb-4">
            <div className="bg-gradient-to-r from-red-500 to-teal-400 h-1 rounded-t-lg"></div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Update Aadhar Address<span className="ml-1">›</span>
              </h2>
              <p className="text-gray-600 mt-2">
                View your Aadhaar and your Bank account linking status. Aadhaar
                Linking status is fetched from NPCI Server.
              </p>
              <a
                onClick={handlenavigate}
                className="text-blue-600 font-medium mt-2 cursor-pointer inline-block hover:underline"
              >
                Update Aadhar Address
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AadharService;
