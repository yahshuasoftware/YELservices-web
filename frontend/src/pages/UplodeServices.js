
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';  // Import jwt-decode
import { useLocation } from 'react-router-dom';

const UploadServices = () => {

  const location = useLocation();
  const { certificatename } = location.state || {}; // Fallback in case state is undefined

  const [certificateName, setCertificateName] = useState(certificatename);
  const [proofOfIdentity, setProofOfIdentity] = useState([""]);
  const [proofOfAddress, setProofOfAddress] = useState([""]);
  const [message, setMessage] = useState('');
  const [availableIdentityDocs, setAvailableIdentityDocs] = useState([]);
  const [availableAddressDocs, setAvailableAddressDocs] = useState([]);
  const [userId, setUserId] = useState('');

  // Extract user ID from JWT token
  useEffect(() => {
    const token = localStorage.getItem('token');  // Assuming token is stored in localStorage
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken._id);  // Set the user ID from the decoded token
      console.log(decodedToken._id)
    }
  }, []);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/departments');
        const departments = response.data;
        
        // Assuming there is only one department in the response
        const department = departments[0];
        
        // Extract proofOfIdentity and proofOfAddress from the certificates
        const certificates = department.certificates;
        if (certificates && certificates.length > 0) {
          const proofOfIdentityDocs = certificates[0].proofOfIdentity;
          const proofOfAddressDocs = certificates[0].proofOfAddress;

          setAvailableIdentityDocs(proofOfIdentityDocs);
          setAvailableAddressDocs(proofOfAddressDocs);

          console.log("Available Proof of Identity:", proofOfIdentityDocs);
          console.log("Available Proof of Address:", proofOfAddressDocs);
        } else {
          console.log('No certificates found');
        }
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };
    fetchDocuments();
  }, []);

  // Handle adding more inputs for identity/address proof
  const handleAddField = (fieldType) => {
    if (fieldType === 'identity') {
      setProofOfIdentity([...proofOfIdentity, null]);
    } else if (fieldType === 'address') {
      setProofOfAddress([...proofOfAddress, null]);
    }
  };

  // Handle file upload
  const handleFileUpload = (e, fieldType, index) => {
    const file = e.target.files[0];
    if (fieldType === 'identity') {
      const updatedFiles = [...proofOfIdentity];
      updatedFiles[index] = file;
      setProofOfIdentity(updatedFiles);
    } else if (fieldType === 'address') {
      const updatedFiles = [...proofOfAddress];
      updatedFiles[index] = file;
      setProofOfAddress(updatedFiles);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('certificateName', certificateName);

    // Append proof of identity files
    proofOfIdentity.forEach((file) => {
      if (file) {
        formData.append('proofOfIdentity', file);
      }
    });

    // Append proof of address files
    proofOfAddress.forEach((file) => {
      if (file) {
        formData.append('proofOfAddress', file);
      }
    });

    try {
      const token = localStorage.getItem('token');
      console.log(userId)  // Retrieve JWT token from localStorage

      const response = await axios.post(`http://localhost:8080/api/users/${userId}/certificates`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,  // Include JWT token in Authorization header
        },
      });

      setMessage('Certificate details and files uploaded successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error uploading certificate details or files');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Certificate Details</h2>
      
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
          {proofOfIdentity.map((_, index) => (

            
            <div key={index} className="mb-4">
               <label className="block text-sm font-medium text-gray-700">
              Select Proof of Identity
            </label>
            <select
              // value={}
              // onChange={}
              className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Document</option>
              {availableIdentityDocs.map((doc, idx) => (
                <option key={idx} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
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
          {proofOfAddress.map((_, index) => (
            <div key={index} className="mb-4">
               <label className="block text-sm font-medium text-gray-700">
              Select Proof of Identity
            </label>
            <select
              // value={}
              // onChange={}
              className="w-full mt-1 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Document</option>
              {availableAddressDocs.map((doc, idx) => (
                <option key={idx} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
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

export default UploadServices;

