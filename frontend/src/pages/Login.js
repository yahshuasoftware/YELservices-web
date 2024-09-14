import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

      // Store the JWT token in localStorage
      localStorage.setItem('token', response.data.jwt_token);

      // Show success toast
      toast.success('Login successfully!', {
        position: "top-right", // Updated position
      });

      // Redirect to dashboard after a short delay to allow the toast to show
      setTimeout(() => {
        navigate('/signup'); // Assuming you have a dashboard route
      }, 1500);
    } catch (error) {
      // Handle errors and show error toast
      if (error.response) {
        toast.error(error.response.data, {
          position: "top-right", // Updated position
        });
      } else {
        toast.error('An error occurred during login', {
          position: "top-right", // Updated position
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#6279B8]">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-14 px-4 mb-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-14 px-4 mb-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="text-[#6279B8] hover:underline text-sm">
            Forgot password?
          </a>
          <input
            type="submit"
            className="w-full h-14 bg-[#6279B8] text-white text-lg font-medium rounded-md mt-6 cursor-pointer hover:bg-[#006653] transition-colors"
            value="Login"
          />
        </form>
        <div className="signup text-center mt-6">
          <span>Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-[#6279B8] cursor-pointer hover:underline"
            >
              Signup
            </Link>
          </span>
        </div>
      </div>

      {/* Toast Container to show notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;
