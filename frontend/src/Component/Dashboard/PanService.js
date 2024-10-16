import React from "react";

const PanService = () => {
  return (
    <>
      
      <h2 className="text-3xl flex justify-center font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6">
      Application for allotment of PAN
        </h2>
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-2 p-4">
        {/* Form 49A Section for Citizens of India */}
        <div className="border border-gray-600   rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Application for allotment of New PAN 
          </h2>
          <p>
            This form should be used when the applicant has never applied for a
            PAN or does not have PAN allotted to him. An applicant can visit
            Income Tax Department (ITD) website to find whether a PAN has been
            allotted to him or not.
          </p>
          <ul className="list-disc ml-6 mt-2">
            
            <li>
              <a href="" className="text-blue-600 hover:underline">
                Read Instructions
              </a>
            </li>
            <li>
              <a href="" className="text-blue-600 hover:underline">
                Documents to be Submitted
              </a>
            </li>
          </ul>
          <a
            href=""
            className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Apply
          </a>
        </div>

        

       
        {/* New Div for Change/Correction in PAN Data */}
        <div className="border border-gray-600 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Change/Correction in PAN Data
          </h2>
          <p>
            This application should be used when PAN has already been allotted
            to the applicant but applicant wants to make change/correction in
            PAN data. A new PAN card bearing the same PAN with updated details
            will be issued to the applicant.
          </p>
         
          <ul className="list-disc ml-6 mt-2">
            
            <li>
              <a href="" className="text-blue-600 hover:underline">
                Read Instructions
              </a>
            </li>
            <li>
              <a href="" className="text-blue-600 hover:underline">
                Documents to be Submitted
              </a>
            </li>
            
          </ul>
          <a
            href=""
            className="mt-4 inline-block text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
          >
            Apply
          </a>
        </div>
        
      </div>
    </>
  );
};

export default PanService;
