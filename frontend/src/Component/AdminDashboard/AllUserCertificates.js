import React, {  useState, useEffect } from 'react';
import SummaryApi from '../../common/Apis';
import axios from 'axios';


const AllUserCertificates = () => {
  
  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [updating, setUpdating] = useState(false); // State to manage loading state during updates

  // Define status options
  const statusOptions = ['pending', 'approved', 'rejected'];

  // Fetch all users and their certificates
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(SummaryApi.users.url, {
            method: SummaryApi.users.method,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
          }

          const userData = await response.json();
          setAllUsers(userData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    } else {
      setError('No token found, please login.');
      setLoading(false);
    }
  }, []);

  // Filter users by search term
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log( 'this is data from all user certificates',allUsers);

  // Function to handle status change
  const handleStatusChange = async (userId, certificateId, newStatus) => {
    const url = `${SummaryApi.users.url}/${userId}/certificates/${certificateId}/status`;
    setUpdating(true); // Start updating

    try {
      // Make an API request to update the status in the backend
      const response = await axios.put(url, {
        status: newStatus,
      });

      if (response.status === 200) {
        // Update the user state with the new status after the API call
        setAllUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId
              ? {
                  ...user,
                  certificatesApplied: user.certificatesApplied.map((cert) =>
                    cert._id === certificateId
                      ? { ...cert, status: newStatus }
                      : cert
                  ),
                }
              : user
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
      <h1 className="text-2xl font-semibold">All Certificates from Each User</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email"
        className="mb-4 px-4 py-2 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Certificates Table */}
      <table className="table-auto border-collapse w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">User Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Certificate ID</th>
            <th className="border px-4 py-2">Certificate Name</th>
            <th className="border px-4 py-2">Uploaded Documents</th>
            <th className="border px-4 py-2">Payment Status</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Application Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) =>
              user.certificatesApplied && user.certificatesApplied.length > 0 ? (
                user.certificatesApplied.map((certificate) => (
                  <tr key={certificate._id}>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.email}</td>
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
                      {/* Status dropdown for admin to change the status */}
                      <select
                        value={certificate.status}
                        onChange={(e) =>
                          handleStatusChange(user._id, certificate._id, e.target.value)
                        }
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
                <tr key={user._id}>
                  <td className="border px-4 py-2" colSpan="8">
                    No certificates applied by {user.name}
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="8" className="border px-4 py-2 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUserCertificates;
