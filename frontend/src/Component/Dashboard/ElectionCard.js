import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../../common/Apis";

const ElectionService = () => {
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
  
    const handlenavigate = (certificatename) => {
      navigate("/service",{state:{certificatename}});
    };
    return (
        <>
            <h2 className="text-3xl flex justify-center font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6">
                Application for Election Card Services
            </h2>
            <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-2 p-4">
            {departments.map(
              (department) =>
                department.name === "Election Services" && ( // Check if department name is "Aadhar Services"
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

                {/* Application for New Election Card */}
                {/* <div className="border border-gray-600 rounded-lg shadow-md p-6 mb-6 hover:bg-blue-100 transition-colors duration-300">
                    <h2 className="text-lg font-semibold mb-2">
                        Application for New Election Card
                    </h2>
                    <p>
                        Use this form to apply for a new election card. This is applicable for
                        those who do not have an election card or want to apply for a fresh one
                        under the state electoral services.
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>
                            <a  className="text-blue-600 hover:underline">
                                Read Instructions
                            </a>
                        </li>
                        <li>
                            <a  className="text-blue-600 hover:underline">
                                Documents to be Submitted
                            </a>
                        </li>
                    </ul>
                    <a onClick={handlenavigate}
                        className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                    >
                        Apply for New Election Card
                    </a>
                </div> */}

                {/* Application for Correction/Update in Election Card */}
                {/* <div className="border border-gray-600 rounded-lg shadow-md p-6 mb-6 hover:bg-blue-100 transition-colors duration-300">
                    <h2 className="text-lg font-semibold mb-2">
                        Correction/Update in Election Card Data
                    </h2>
                    <p>
                        If you already have an election card but need to update or correct the
                        details (e.g., name, address), you can submit a request here. The corrected
                        election card with updated details will be issued to you.
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>
                            <a  className="text-blue-600 hover:underline">
                                Read Instructions
                            </a>
                        </li>
                        <li>
                            <a className="text-blue-600 hover:underline">
                                Documents to be Submitted
                            </a>
                        </li>
                    </ul>
                    <a
                        onClick={handlenavigate}
                        className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                    >
                        Apply for Correction
                    </a>
                </div> */}
            </div>
        </>
    );
};

export default ElectionService;