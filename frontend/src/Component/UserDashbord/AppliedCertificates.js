import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Usercontext } from '../../Store/UserContext';
import { FaInfoCircle } from 'react-icons/fa'; // Icon for revert info
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppliedCertificates = () => {
  const user = useContext(Usercontext);
  const [sortOrder, setSortOrder] = useState('asc');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [revertReason, setRevertReason] = useState('');
  const [revertCertificateId, setRevertCertificateId] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  if (!user) {
    return <div>Loading...</div>;
  }

  // Sort the certificates based on the applicationDate
  const sortedCertificates = [...user.certificatesApplied].sort((a, b) => {
    const dateA = new Date(a.applicationDate);
    const dateB = new Date(b.applicationDate);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  // Toggle sorting order between 'asc' and 'desc'
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Handle revert icon click to open modal
  const handleRevertClick = (certificate) => {
    setRevertReason(certificate.revertReason || 'No reason provided');
    setRevertCertificateId(certificate._id);
    setIsModalOpen(true);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  // Handle file upload submission
  const handleRevertUpload = async () => {
    if (selectedFiles.length === 0) {
      toast.error('Please select files to upload.');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('revertUploads', selectedFiles[i]);
    }

    try {
      const response = await axios.post(`/api/certificates/${revertCertificateId}/revertUploads`, formData);
      if (response.status === 200) {
        toast.success('Documents uploaded successfully.');
        setIsModalOpen(false);
        setSelectedFiles([]);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      toast.error('Error uploading files. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-4 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <h1 className="text-xl sm:text-2xl font-semibold">Applied Certificates</h1>
      <button
        className="mt-2 mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleSortOrder}
      >
        Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse w-full mt-4">
          <thead>
            <tr>
              <th className="border px-2 py-1 sm:px-4 sm:py-2">Certificate Name</th>
              <th className="border px-2 py-1 sm:px-4 sm:py-2">Proof of Identity & Address</th>
              <th className="border px-2 py-1 sm:px-4 sm:py-2">Application Date</th>
              <th className="border px-2 py-1 sm:px-4 sm:py-2">Status</th>
              <th className="border px-2 py-1 sm:px-4 sm:py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedCertificates.map((certificate, index) => (
              <tr key={index}>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">{certificate.certificateName}</td>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">
                  {certificate.uploadedDocuments.proofOfIdentity.concat(certificate.uploadedDocuments.proofOfAddress).map((doc, idx) => (
                    <div key={idx}>
                      {idx + 1}.{' '}
                      <a href={doc.path} target="_blank" rel="noopener noreferrer">
                        {doc.filename}
                      </a>
                    </div>
                  ))}
                </td>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">{new Date(certificate.applicationDate).toLocaleDateString()}</td>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">{certificate.status}</td>
                <td className="border px-2 py-1 sm:px-4 sm:py-2">
                  {certificate.status === 'revert' && (
                    <button
                      onClick={() => handleRevertClick(certificate)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaInfoCircle className="inline-block mr-1" /> View Revert Details
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for revert reason and file upload */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2 max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Revert Details</h2>
            <p className="mb-4"><strong>Reason for Revert:</strong> {revertReason}</p>

            <label className="block mb-2 font-medium">Upload Revised Documents:</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full mb-4"
            />

            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 mr-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleRevertUpload}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedCertificates;
