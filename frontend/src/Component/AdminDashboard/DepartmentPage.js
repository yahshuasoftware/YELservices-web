import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddDepartmentForm from './AddDepartmentForm';
import AddCertificateForm from './AddCertificateForm';
import DepartmentList from './DepartmentList';

const DepartmentPage = () => {
  const [departments, setDepartments] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch all departments when the component mounts
  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  // Add a new department
  const addDepartment = async (name, certificates) => {
    try {
      const response = await axios.post('http://localhost:8080/api/departments', { name, certificates });
      setMessage(response.data.message);
      getDepartments();  // Update department list after adding
    } catch (error) {
      console.error('Error adding department:', error);
      setMessage('Failed to add department');
    }
  };

  // Add certificates to an existing department
  const addCertificatesToDepartment = async (departmentName, newCertificate) => {
    try {
      const response = await axios.post('http://localhost:8080/api/departments/add-certificates', {
        departmentName,
        newCertificates: [newCertificate],
      });
      setMessage(response.data.message);
      getDepartments();  // Update department list after adding certificates
    } catch (error) {
      console.error('Error adding certificates:', error);
      setMessage('Failed to add certificates');
    }
  };

  return (
    <div>
      <h1>Department Management</h1>

      {/* Render AddDepartmentForm only once */}
      <AddDepartmentForm addDepartment={addDepartment} />
      <div className=' h-11'></div>
      <AddCertificateForm addCertificatesToDepartment={addCertificatesToDepartment} />
      <div className='h-20'></div>
      <DepartmentList departments={departments} />

      {message && <p>{message}</p>}
    </div>
  );
};

export default DepartmentPage;
