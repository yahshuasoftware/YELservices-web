import React, { useState, useEffect } from 'react';
import SummaryApi from '../../common/Apis';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Import the jwt-decode library

const AssignedTaskPage = () => {
  const [assignedCertificates, setAssignedCertificates] = useState([]); // Updated state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [updating, setUpdating] = useState(false); // State to manage loading state during updates

  // Define status options
  const statusOptions = ['pending', 'approved', 'rejected'];

  // Fetch assigned certificates
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Decode the token to extract user ID
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id; // Get the user ID

      const fetchAssignedData = async () => {
        try {
          const url = `${SummaryApi.assignedCertificates.url}/${userId}`; // Use the userId in the URL
          const response = await axios.get(url);
          setAssignedCertificates(response.data.assignedCertificates || []); // Set assigned certificates directly
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchAssignedData();
    } else {
      setError('No token found, please login.');
      setLoading(false);
    }
  }, []);

  // Filter certificates by search term
  const filteredCertificates = assignedCertificates.filter((certificate) => {
    const certificateName = certificate.certificateName || ''; // Default to empty string if undefined
    return certificateName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Function to handle status change
  const handleStatusChange = async (certificateId, newStatus) => {
    const url = `${SummaryApi.CertificatesStatusHandle.url}/${certificateId}/status`;
    setUpdating(true); // Start updating

    try {
      const response = await axios.put(url, {
        status: newStatus,
      });

      if (response.status === 200) {
        // Update the state with the new status after the API call
        setAssignedCertificates((prevCertificates) =>
          prevCertificates.map((cert) =>
            cert._id === certificateId ? { ...cert, status: newStatus } : cert
          )
        );
        console.log('Status updated successfully!');
      }
    } catch (error) {
      console.error('Error updating certificate status:', error);
    } finally {
      setUpdating(false); // Stop updating
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-semibold">Assigned Certificates</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by certificate name"
        className="mb-4 px-4 py-2 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Certificates Table */}
      <table className="table-auto border-collapse w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Certificate ID</th>
            <th className="border px-4 py-2">Certificate Name</th>
            <th className="border px-4 py-2">Uploaded Documents</th>
            <th className="border px-4 py-2">Payment Status</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Application Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((certificate) => (
              <tr key={certificate._id}>
                <td className="border px-4 py-2">{certificate._id}</td>
                <td className="border px-4 py-2">{certificate.certificateName}</td>
                <td className="border px-4 py-2">
                  {certificate.uploadedDocuments.proofOfIdentity.concat(
                    certificate.uploadedDocuments.proofOfAddress
                  ).map((doc, idx) => (
                    <div key={idx}>
                      {idx + 1}.{' '}
                      <a href={doc.path} target="_blank" rel="noopener noreferrer">
                        {doc.filename}
                      </a>
                    </div>
                  ))}
                </td>
                <td className="border px-4 py-2">{certificate.paymentStatus}</td>
                <td className="border px-4 py-2">
                  <select
                    value={certificate.status}
                    onChange={(e) => handleStatusChange(certificate._id, e.target.value)}
                    className="border p-2 rounded-md"
                    disabled={updating} // Disable dropdown while updating
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border px-4 py-2">
                  {new Date(certificate.applicationDate).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border px-4 py-2 text-center">
                No certificates found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedTaskPage;
