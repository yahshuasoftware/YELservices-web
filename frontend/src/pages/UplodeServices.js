import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Fix import for jwt-decode
import { useLocation,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import react-toastify styles
import SummaryApi from '../common/Apis';

const UploadServices = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  const { certificatename } = location.state || {}; // Fallback in case state is undefined

  const [certificateName, setCertificateName] = useState(certificatename || ''); // Fallback for certificate name
  const [proofOfIdentity, setProofOfIdentity] = useState([""]);
  const [proofOfAddress, setProofOfAddress] = useState([""]);
  const [availableIdentityDocs, setAvailableIdentityDocs] = useState([]);
  const [availableAddressDocs, setAvailableAddressDocs] = useState([]);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [payAmount,setAmount]=useState(0)


  // Extract user ID from JWT token
  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken._id); // Set the user ID from the decoded token
      console.log(decodedToken._id);
    }
  }, []);

  // Fetch proof of identity and address documents from backend on component load
  useEffect(() => {
    const fetchDocuments = async () => {
      // original url=http://localhost:8080/app/api/documents/${certificateName}
     const url=`${SummaryApi.documents.url}/${certificateName}`
      try {
        const response = await axios.get(url);
        const { proofOfIdentity, proofOfAddress, amount } = response.data; // Adjust based on response structure
        console.log(amount);
        setAmount(amount)

        setAvailableIdentityDocs(proofOfIdentity);
        setAvailableAddressDocs(proofOfAddress);

        console.log("Available Proof of Identity:", proofOfIdentity);
        console.log("Available Proof of Address:", proofOfAddress);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    if (certificateName) {
      fetchDocuments();
    }
  }, [certificateName]);

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

  const handlePayment = async () => {
    try {
      const url=SummaryApi.payment.url
      // Create Razorpay order by calling your backend
      const paymentResponse = await axios.post(url, {
        amount: payAmount, // Replace with the actual amount
      });
  
      const { amount, id: order_id, currency } = paymentResponse.data;
  
      // Ensure Razorpay script is available
      if (typeof window.Razorpay === 'undefined') {
        console.error('Razorpay SDK not loaded');
        toast.error('Payment gateway not available');
        return;
      }
  
      const options = {
        key: 'rzp_test_U4XuiM2cjeWzma', // Razorpay key ID
        amount: amount,
        currency: currency,
        name: 'Certificate Service',
        description: 'Payment for certificate',
        order_id: order_id,
        handler: async (response) => {
          try {
            const paymentId = response.razorpay_payment_id;
            console.log('Payment successful:', paymentId);
  
            // Proceed with form submission after successful payment
            await handleSubmit();

          } catch (error) {
            console.error('Error during payment handling:', error);
          }
        },
        theme: {
          color: '#3399cc',
        },
      };
  
      const rzp = new window.Razorpay(options); // Razorpay instance
      rzp.open();
    } catch (error) {
      console.error('Error creating Razorpay order:', error); // Inspect the error
      toast.error('Error initiating payment');
    }
  };
  // Handle form submission (called after successful payment)
  const handleSubmit = async () => {
    setLoading(true);

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
       const url = `${SummaryApi.users.url}/${userId}/certificates`
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });

      toast.success('Certificate details uploaded successfully');
    } catch (error) {
      toast.error('Error uploading certificate details');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add Certificate Details</h2>

      <form className="space-y-4">
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
              <label className="block text-sm font-medium text-gray-700">Select Proof of Identity</label>
              <select
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
              <label className="block text-sm font-medium text-gray-700">Select Proof of Address</label>
              <select
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
          type="button"
          onClick={handlePayment} // Call Razorpay before submission
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay & Submit'}
        </button>
      </form>

      <ToastContainer />
      {loading && <p className="text-center text-gray-500 mt-4">Uploading, please wait...</p>}
    </div>
  );
};

export default UploadServices;