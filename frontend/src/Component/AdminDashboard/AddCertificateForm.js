import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const proofOfIdentityOptions = [
  { value: 'Passport', label: 'Passport' },
  { value: 'Driving License', label: 'Driving License' },
  { value: 'Aadhaar Card', label: 'Aadhaar Card' },
  { value: 'Voter ID', label: 'Voter ID' }
];

const proofOfAddressOptions = [
  { value: 'Utility Bill', label: 'Utility Bill' },
  { value: 'Rental Agreement', label: 'Rental Agreement' },
  { value: 'Bank Statement', label: 'Bank Statement' },
  { value: 'Driving License', label: 'Driving License' }
];

const AddCertificateForm = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [certificates, setCertificates] = useState([{ name: '', description: '', proofOfIdentity: [], proofOfAddress: [] }]);
  const [message, setMessage] = useState('');

  // Function to add certificates to a department
  const addCertificatesToDepartment = async (departmentName, formattedCertificates) => {
    try {
      const response = await axios.post('http://localhost:8080/api/departments/add-certificates', {
        departmentName,
        newCertificates: formattedCertificates,
      });
      setMessage(response.data.message);
      // Optionally reset the form or update the department list
      resetForm();
    } catch (error) {
      console.error('Error adding certificates:', error);
      setMessage('Failed to add certificates');
    }
  };

  const handleDepartmentChange = (e) => {
    setDepartmentName(e.target.value);
  };

  const handleCertificateChange = (index, field, value) => {
    const updatedCertificates = [...certificates];
    updatedCertificates[index][field] = value;
    setCertificates(updatedCertificates);
  };

  const addNewCertificate = () => {
    setCertificates([...certificates, { name: '', description: '', proofOfIdentity: [], proofOfAddress: [] }]);
  };

  const addNewDepartment = () => {
    const formattedCertificates = certificates.map(cert => ({
      ...cert,
      proofOfIdentity: cert.proofOfIdentity.map(option => option.value),
      proofOfAddress: cert.proofOfAddress.map(option => option.value)
    }));
    addCertificatesToDepartment(departmentName, formattedCertificates);
  };

  const resetForm = () => {
    setDepartmentName('');
    setCertificates([{ name: '', description: '', proofOfIdentity: [], proofOfAddress: [] }]);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add New Certificates</h2>
      <input
        type="text"
        className="block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={departmentName}
        onChange={handleDepartmentChange}
        placeholder="Department Name"
      />
      <h3 className="text-xl font-semibold mb-2">Certificates</h3>

      {certificates.map((certificate, index) => (
        <div key={index} className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Certificate Name</label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={certificate.name}
              onChange={(e) => handleCertificateChange(index, 'name', e.target.value)}
              placeholder="Certificate Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={certificate.description}
              onChange={(e) => handleCertificateChange(index, 'description', e.target.value)}
              placeholder="Description"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Proof of Identity</label>
            <Select
              options={proofOfIdentityOptions}
              value={certificate.proofOfIdentity}
              onChange={(selectedOptions) => handleCertificateChange(index, 'proofOfIdentity', selectedOptions)}
              className="w-full"
              isMulti
              placeholder="Select Proof of Identity"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Proof of Address</label>
            <Select
              options={proofOfAddressOptions}
              value={certificate.proofOfAddress}
              onChange={(selectedOptions) => handleCertificateChange(index, 'proofOfAddress', selectedOptions)}
              className="w-full"
              isMulti
              placeholder="Select Proof of Address"
            />
          </div>
        </div>
      ))}

      <button
        onClick={addNewCertificate}
        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Add Another Certificate
      </button>

      <button
        onClick={addNewDepartment}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Department
      </button>

      {message && <p className="mt-4 text-center text-green-500">{message}</p>} {/* Message to display status */}
    </div>
  );
};

export default AddCertificateForm;