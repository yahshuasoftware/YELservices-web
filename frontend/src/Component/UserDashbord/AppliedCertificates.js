import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Usercontext } from '../../Store/UserContext';

const AppliedCertificates = () => {
  const user = useContext(Usercontext);
  const [sortOrder, setSortOrder] = useState('asc'); // Set default sort order

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

  return (
    <div className="container mx-auto mt-4 px-4 sm:px-6 lg:px-8">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default AppliedCertificates;
