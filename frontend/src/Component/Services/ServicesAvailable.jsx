import React, { useEffect, useRef, useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import PopModel from "../Model/PopModel"; // Import the PopModel component

const ServicesAvailable = () => {
  const [departments, setDepartments] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch departments and certificates from server
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/departments'); // Replace with your API endpoint
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

  return (
    <>
      <div className="w-4/5 bg-blue-300 bg-opacity-10 md:w-full sm:w-full lg:w-full pb-9">
        <h1 className="rounded-t-md text-white bg-black flex justify-center">
          Services Available Online
        </h1>
        <div className="h-full p-2">
          <div className="text-white text-xs font-bold justify-between flex">
            <span>Click Below Services for details</span>
            <span
              className="cursor-pointer gap-2 flex hover:bg-blue-950 p-1 rounded-md"
            >
              <div onClick={toggleScrolling} className="text-black hover:text-white text-xl">
                {isScrolling ? <FaToggleOn /> : <FaToggleOff />}
              </div>
              Stop Auto Scrolling
            </span>
          </div>
          <div>
            <input
              className="w-full my-3 text-black p-2 rounded-md border-white"
              type="text"
              placeholder="Search Here"
            />
          </div>

          <div ref={scrollbarDivRef} className="p-1 overflow-y-auto h-72 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-white w-full max-w-4xl">
            {departments.map((department, deptIndex) => (
              <div key={deptIndex}>
                <h1 className="text-yellow-400 text-2xl font-bold mb-4">
                  {department.name}
                </h1>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {department.certificates.map((certificate, certIndex) => (
                    <div
                      key={certificate._id}
                      className="bg-blue-800 bg-opacity-50 text-white p-4 text-center rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer"
                      onClick={() => handleCertificateClick(certificate)}
                    >
                      <h2 className="text-lg font-bold">{certificate.name}</h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
  );
};

export default ServicesAvailable;