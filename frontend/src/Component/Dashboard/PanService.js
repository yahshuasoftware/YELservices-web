import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../../common/Apis";

const PanService = () => {
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

  // const handlenavigate = (certificatename) => {
  //   navigate("/service",{state:{certificatename}});
  // };
  const handlenavigate = () => {
    navigate("/service");
   
  };
  return (
    <>
      <h2 className="text-3xl flex justify-center font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6">
        Application for allotment of PAN
      </h2>
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-2 p-4">
        <div className="department-container">
          {departments.map(
            (department) =>
              department.name === "Pan Services" && ( // Check if department name is "Aadhar Services"
                <div key={department.id} className="flex gap-4 ">
               
                    {department.certificates &&
                    department.certificates.length > 0 ? (
                      department.certificates.map((certificate, index) => (
                        <div className="" key={index}>
                          <div className="border border-gray-600 rounded-lg w-96  shadow-md p-6 mb-6">
                            <h2 className="text-lg font-semibold mb-2">
                             {certificate.name}
                            </h2>
                            <a
                              onClick={handlenavigate}
                              className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                              Apply
                            </a>
                          </div>
                          <br />
                          {/* Add other certificate details here */}
                        </div>
                      ))
                    ) : (
                      <p>No certificates available for this department.</p>
                    )}
                
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default PanService;
