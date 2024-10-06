import React, { useState } from 'react';
import Select from 'react-select';

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

const AddDepartmentForm = ({ addDepartment }) => {
  const [departmentName, setDepartmentName] = useState('');
  const [certificates, setCertificates] = useState([
    { name: '', description: '', proofOfIdentity: [], proofOfAddress: [] }
  ]);

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
    addDepartment(departmentName, formattedCertificates);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add New Department</h2>
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
              placeholder="Select Proof of Identity"
              isMulti
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Proof of Address</label>
            <Select
              options={proofOfAddressOptions}
              value={certificate.proofOfAddress}
              onChange={(selectedOptions) => handleCertificateChange(index, 'proofOfAddress', selectedOptions)}
              className="w-full"
              placeholder="Select Proof of Address"
              isMulti
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
    </div>
  );
};

export default AddDepartmentForm;
