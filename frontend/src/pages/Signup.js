import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match', {
        position: "top-right",
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/signup', {
        name,
        email,
        password,
      });

      // Show success toast
      toast.success('Signup successful! Please login.', {
        position: "top-right",
      });

      // Redirect to login page after a short delay to allow the toast to show
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {
      // Handle errors and show error toast
      if (error.response) {
        toast.error(error.response.data, {
          position: "top-right",
        });
      } else {
        toast.error('An error occurred during signup', {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div className="h-96 mt-16 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8">
        <h2 className="text-xl font-semibold text-center mb-6">Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full h-14 px-4 mb-4 text-md border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-14 px-4 mb-4 text-md border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-14 px-4 mb-4 text-md border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full h-14 px-4 mb-4 text-md border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            className="w-full h-14 bg-[#6279B8] text-white text-md font-medium rounded-md mt-6 cursor-pointer hover:bg-[#006653] transition-colors"
            value="Signup"
          />
        </form>
        <div className="login text-center mt-6">
          <span>Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#6279B8] cursor-pointer hover:underline"
            >
              Login
            </Link>
          </span>
        </div>
      </div>

      {/* Toast Container to show notifications */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
