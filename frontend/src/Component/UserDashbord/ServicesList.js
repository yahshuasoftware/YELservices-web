import React, { useEffect, useRef, useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import PopModel from "../Model/PopModel"; // Import the PopModel component
import SummaryApi from "../../common/Apis";

const ServicesList = () => {
    const [departments, setDepartments] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Add search state

  // Fetch departments and certificates from server
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch(SummaryApi.addDepartment.url); // Replace with your API endpoint
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        console.error('Error fetching departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  // Auto scroll Functionality
  const scrollbarDivRef = useRef(null);
  useEffect(() => {
    if (isScrolling) return;
    const scrollableDiv = scrollbarDivRef.current;
    let scrollStep = 2; // speed of scrolling in pixel
    let scrollDirection = 1; // 1 for down and -1 for up

    const autoScroll = () => {
      if (scrollableDiv.scrollTop + scrollableDiv.clientHeight >= scrollableDiv.scrollHeight) {
        scrollDirection = -1;
      } else if (scrollableDiv.scrollTop <= 0) {
        scrollDirection = 1;
      }
      scrollableDiv.scrollTop += scrollStep * scrollDirection;
    };
    const interval = setInterval(autoScroll, 50);
    return () => clearInterval(interval);
  }, [isScrolling]);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

   // Handle search input
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtered departments and certificates based on search term
  const filteredDepartments = departments
    .map((department) => ({
      ...department,
      certificates: department.certificates.filter((certificate) =>
        certificate.name.toLowerCase().includes(searchTerm)
      ),
    }))
    .filter(
      (department) =>
        department.name.toLowerCase().includes(searchTerm) ||
        department.certificates.length > 0
    );


  return (
    <>
      <div className="w-4/5 bg-white bg-opacity-10 md:w-full sm:w-full lg:w-full pb-9">
        <h1 className="rounded-t-md text-black bg-white flex justify-center text-2xl font-bold">
          Services Available Online
        </h1>
        <div className="h-full p-2">
          <div className="text-white text-xs font-bold justify-between flex">
            <span>Click Below Services for details</span>
            <span
              className="cursor-pointer gap-2 flex hover:bg-gray-600 p-1 rounded-md"
            >
              <div onClick={toggleScrolling} className="text-black hover:text-black text-xl">
                {isScrolling ? <FaToggleOn /> : <FaToggleOff />}
              </div>
              <span className="text-black hover:text-white ">Stop Auto Scrolling</span>
            </span>
          </div>
          <div className="w-full my-3">
           <input
             className="w-full p-3 rounded-md border-2 border-black text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-500 placeholder-gray-500"
             type="text"
             placeholder="Search Here"
             value={searchTerm}
              onChange={handleSearchChange}
             />
        </div>


          <div ref={scrollbarDivRef} className="p-1 overflow-y-auto h-72 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-white w-full">

          {filteredDepartments.length > 0 ? (
              filteredDepartments.map((department, deptIndex) => (
                <div key={deptIndex}>
                  <h1 className="text-black text-2xl font-bold mb-4">
                    {department.name}
                  </h1>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {department.certificates.map((certificate, certIndex) => (
                      <div
                        key={certificate._id}
                        className="bg-[#0059b3] bg-opacity-80 text-white p-4 text-center rounded-lg shadow-md hover:bg-[#003366] transition cursor-pointer"
                        onClick={() => handleCertificateClick(certificate)}
                      >
                        <h2 className="text-lg font-bold">
                          {certificate.name}
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white">No results found</p>
            )}

            {/* {departments.map((department, deptIndex) => (
              <div key={deptIndex}>
                <h1 className="text-black text-2xl font-bold mb-4">
                  {department.name}
                </h1>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {department.certificates.map((certificate, certIndex) => (
                    <div
                      key={certificate._id}
                      className="bg-[#0059b3] bg-opacity-80 text-white p-4 text-center rounded-lg shadow-md hover:bg-[#003366] transition cursor-pointer"
                      onClick={() => handleCertificateClick(certificate)}
                    >
                      <h2 className="text-lg font-bold">{certificate.name}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>

      {showModal && (
        <PopModel
          certificate={selectedCertificate}
          closeModal={handleCloseModal}
        />
      )}
    </>
  )
}

export default ServicesList