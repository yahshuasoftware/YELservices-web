import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopModel = ({ certificate, closeModal }) => {
  const navigate=useNavigate();

  const handlenavigate = () => {
   navigate("/service")

  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        {/* Modal Box */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-2xl font-semibold text-orange-600">
              Certificate Name: {certificate ? certificate.name : 'N/A'}
            </h2>
            <button
              className="text-red-600 font-semibold"
              onClick={closeModal}
            >
              Close
            </button>
          </div>

          {/* Document Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Required Documents</h3>

            {/* Proof of Identity */}
            <div className="mb-6">
              <h4 className="font-bold text-lg text-blue-600 mb-2">Proof of Identity (Any -1)</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="grid grid-cols-2 gap-4">
                  <li>1) PAN Card</li>
                  <li>2) Passport</li>
                  <li>3) RSBY Card</li>
                  <li>4) Aadhaar Card</li>
                  <li>5) Voter ID Card</li>
                  <li>6) MNREGA Job Card</li>
                  <li>7) Driving License</li>
                  <li>8) Photo of Applicant</li>
                  <li>9) Signature of Applicant</li>
                  <li>10) Identity card issued by Govt or Semi Govt organizations</li>
                </ul>
              </div>
            </div>

            {/* Proof of Address */}
            <div>
              <h4 className="font-bold text-lg text-blue-600 mb-2">Proof of Address (Any -1)</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="grid grid-cols-2 gap-4">
                  <li>1) Passport</li>
                  <li>2) Water Bill</li>
                  <li>3) Ration Card</li>
                  <li>4) Aadhaar Card</li>
                  <li>5) Voter ID Card</li>
                  <li>6) Telephone Bill</li>
                  <li>7) Driving License</li>
                  <li>8) Electricity Bill</li>
                  <li>9) Property Tax Receipt</li>
                  <li>10) Extracts of 7/12 and 8 A/Rent Receipt</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mt-6">
            <table className="min-w-full table-auto border-collapse border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Sr.No</th>
                  <th className="border px-4 py-2">Service name</th>
                  <th className="border px-4 py-2">Time limit</th>
                  <th className="border px-4 py-2">Designated Officer</th>
                  <th className="border px-4 py-2">First Appellate Officer</th>
                  <th className="border px-4 py-2">Second Appellate Officer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 text-center">1</td>
                  <td className="border px-4 py-2">Income Certificate</td>
                  <td className="border px-4 py-2 text-center">15</td>
                  <td className="border px-4 py-2">Nayab Tahsildar</td>
                  <td className="border px-4 py-2">Tahsildar</td>
                  <td className="border px-4 py-2">Sub Divisional Officer</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 text-center">2</td>
                  <td className="border px-4 py-2">उत्पन्न प्रमाणपत्र</td>
                  <td className="border px-4 py-2 text-center">१५</td>
                  <td className="border px-4 py-2">ना.तहसीलदार</td>
                  <td className="border px-4 py-2">तहसीलदार</td>
                  <td className="border px-4 py-2">उपविभागीय अधिकारी</td>
                </tr>
              </tbody>
            </table>

            {/* Buttons Section */}
            <div className="flex justify-end mt-4 space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handlenavigate} >Apply</button>
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                onClick={closeModal}
              >
                Close
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Print</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopModel;
