import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UplodeServices = () => {
  const [certificateName, setCertificateName] = useState('');
  const [proofOfIdentity, setProofOfIdentity] = useState(['']);
  const [proofOfAddress, setProofOfAddress] = useState(['']);
  const [message, setMessage] = useState('');
  const [availableIdentityDocs, setAvailableIdentityDocs] = useState([]);
  const [availableAddressDocs, setAvailableAddressDocs] = useState([]);

  // Fetch proof of identity and address documents from backend on component load
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const identityResponse = await axios.get('http://localhost:8080/api/departments'); // Adjust endpoint as per your backend
        setAvailableIdentityDocs(identityResponse.data.certificates.proofOfIdentity);

        const addressResponse = await axios.get('/api/address-docs'); // Adjust endpoint as per your backend
        setAvailableAddressDocs(addressResponse.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };
    fetchDocuments();
  }, []);

  // Handle adding more inputs for identity/address proof
  const handleAddField = (fieldType) => {
    if (fieldType === 'identity') {
      setProofOfIdentity([...proofOfIdentity, '']);
    } else if (fieldType === 'address') {
      setProofOfAddress([...proofOfAddress, '']);
    }
  };

  // Handle change for identity and address input fields
  const handleInputChange = (index, value, fieldType) => {
    if (fieldType === 'identity') {
      const newProofOfIdentity = [...proofOfIdentity];
      newProofOfIdentity[index] = value;
      setProofOfIdentity(newProofOfIdentity);
    } else if (fieldType === 'address') {
      const newProofOfAddress = [...proofOfAddress];
      newProofOfAddress[index] = value;
      setProofOfAddress(newProofOfAddress);
    }
  };

  // Handle file upload (image upload)
  const handleFileUpload = async (e, fieldType, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (fieldType === 'identity') {
        const newProofOfIdentity = [...proofOfIdentity];
        newProofOfIdentity[index] = response.data.fileUrl; // Assuming backend returns the URL of the uploaded file
        setProofOfIdentity(newProofOfIdentity);
      } else if (fieldType === 'address') {
        const newProofOfAddress = [...proofOfAddress];
        newProofOfAddress[index] = response.data.fileUrl;
        setProofOfAddress(newProofOfAddress);
      }

      setMessage('File uploaded successfully');
    } catch (error) {
      setMessage('Error uploading file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { certificateName, proofOfIdentity, proofOfAddress };
    
    try {
      await axios.post('/api/services', data);
      setMessage('Service details saved successfully');
    } catch (error) {
      setMessage('Error saving service details');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Service Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Certificate Name</label>
          <input
            type="text"
            value={certificateName}
            onChange={(e) => setCertificateName(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter certificate name"
            required
          />
        </div>

        {/* Proof of Identity */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Proof of Identity</label>
          {proofOfIdentity.map((identity, index) => (
            <div key={index} className="mb-4">
              <select
                value={identity}
                onChange={(e) => handleInputChange(index, e.target.value, 'identity')}
                className="mt-1 p-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Proof of Identity</option>
                {availableIdentityDocs.map((doc) => (
                  <option key={doc._id} value={doc.documentUrl}>
                    {doc.documentType}
                  </option>
                ))}
              </select>

              {/* Upload Image for Proof of Identity */}
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, 'identity', index)}
                className="mt-2"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField('identity')}
            className="text-blue-500 hover:text-blue-700"
          >
            + Add more Identity
          </button>
        </div>

        {/* Proof of Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Proof of Address</label>
          {proofOfAddress.map((address, index) => (
            <div key={index} className="mb-4">
              <select
                value={address}
                onChange={(e) => handleInputChange(index, e.target.value, 'address')}
                className="mt-1 p-2 block w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Proof of Address</option>
                {availableAddressDocs.map((doc) => (
                  <option key={doc._id} value={doc.documentUrl}>
                    {doc.documentType}
                  </option>
                ))}
              </select>

              {/* Upload Image for Proof of Address */}
              <input
                type="file"
                onChange={(e) => handleFileUpload(e, 'address', index)}
                className="mt-2"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddField('address')}
            className="text-blue-500 hover:text-blue-700"
          >
            + Add more Address
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>

        {message && <p className="mt-4 text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default UplodeServices;
