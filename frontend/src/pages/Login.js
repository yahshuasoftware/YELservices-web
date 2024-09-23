import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

const districts = [
  "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Buldhana",
  "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalna",
  "Jalgaon", "Kolhapur", "Latur", "Mumbai", "Mumbai Suburban", "Nagpur",
  "Nanded", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri",
  "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [district, setDistrict] = useState('Pune'); // Default district
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error('Please verify that you are human.', { position: "top-right" });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
        district,  // Pass district along with email and password
    
      });

      localStorage.setItem('token', response.data.jwt_token);  // Store JWT token
      toast.success('Login successfully!', { position: "top-right" });

      setTimeout(() => navigate('/dashboard'), 1000);  // Redirect after successful login
    } catch (error) {
      const message = error.response ? error.response.data : 'An error occurred during login';
      toast.error(message, { position: "top-right" });
    }
  };

  const handleCaptchaChange = (value) => setCaptchaValue(value);

  return (
    <div className="h-96 mt-7 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8">
        <h2 className="text-xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full h-14 px-4 mb-4 text-lg border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full h-14 px-4 mb-4 text-lg border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="w-full h-14 px-4 mb-4 text-lg border border-gray-300 rounded-md"
          >
            {districts.map((dist) => (
              <option key={dist} value={dist}>{dist}</option>
            ))}
          </select>

          <ReCAPTCHA
            sitekey="6Lfw60oqAAAAAP6WEMG_uT3BjpSi7gW5FKsLkySs" // Replace with your reCAPTCHA site key
            onChange={handleCaptchaChange}
          />

          <a href="#" className="text-sm hover:underline">Forgot password?</a>
          <input
            type="submit"
            className="w-full h-14 bg-blue-500 text-white rounded-md mt-6 cursor-pointer hover:bg-blue-600"
            value="Login"
          />
        </form>
        <div className="signup text-center mt-6">
          <span>Don't have an account?{' '}
            <Link to="/signup" className="hover:underline">Signup</Link>
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
