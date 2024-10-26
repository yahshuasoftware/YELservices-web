// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ReCAPTCHA from 'react-google-recaptcha';
// import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth'
// import { auth } from '../firebase/setup';
// import SummaryApi from '../common/Apis';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [loginWithOtp, setLoginWithOtp] = useState(false); // Toggle for email vs OTP login
//   const [district, setDistrict] = useState('Pune'); // Default district
//   const [state, setState] = useState('Maharashtra'); // Default state
//   const [captchaValid, setCaptchaValid] = useState(false);
//   const navigate = useNavigate();

//   const sendOtp =async()=>{
//     try {
//       const recaptch = new RecaptchaVerifier(auth,"recaptcha",{})
//       const confirmation = await signInWithPhoneNumber(auth,phoneNumber)
//       console.log(confirmation)

//     } catch (error) {
//       console.log(error);

//     }
//   }

//   // Email and Password Login Handler
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios({
//         url: SummaryApi.signIn.url,        // Use URL from the API configuration
//         method: SummaryApi.signIn.method,  // Use method from the API configuration
//         data: {
//           email,
//           password,
//           district,
//           state,
//         },
//       });
//       if (response.data.jwt_token) {
//         localStorage.setItem('token', response.data.jwt_token);
//         toast.success('Login successfully!', { position: "top-right" });

//         setTimeout(() => {
//           console.log("Navigating to dashboard");
//           navigate('/dashbord');
//         }, 500);
//       } else {
//         toast.error('Failed to receive token', { position: "top-right" });
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       toast.error(error.response ? error.response.data : 'An error occurred during login', { position: "top-right" });
//     }
//   };

//   // OTP Login Handler
//   const handleOtpLogin = async (e) => {
//     e.preventDefault();

//     try {
//       if (!isOtpSent) {
//         const SendOtpUrl = `${SummaryApi.sendOtp.url}`
//         // Send OTP
//         // http://localhost:8080/api/send-otp
//         await axios.post(SendOtpUrl, { phoneNumber });
//         setIsOtpSent(true);
//         toast.success('OTP sent to your phone number.', { position: "top-right" });
//       } else {
//         // Verify OTP
//         const verifyOtpUrl=`${SummaryApi.verifyOtp.url}`

//         const response = await axios.post(verifyOtpUrl, { phoneNumber, otp });
//         if (response.data.jwt_token) {
//           localStorage.setItem('token', response.data.jwt_token);
//           toast.success('Login successfully!', { position: "top-right" });

//           setTimeout(() => {
//             console.log("Navigating to dashboard");
//             navigate('/dashbord');
//           }, 1000);
//         } else {
//           toast.error('Failed to receive token', { position: "top-right" });
//         }
//       }
//     } catch (error) {
//       console.error('OTP login error:', error);
//       toast.error(error.response ? error.response.data : 'An error occurred during OTP login', { position: "top-right" });
//     }
//   };

//   // Handle Captcha
//   const handleCaptchaChange = (value) => {
//     setCaptchaValid(!!value);
//   };

//   const districts = [
//     'Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara',
//     'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli',
//     'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban',
//     'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar',
//     'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara',
//     'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'
//   ];

//   const states = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
//     'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
//     'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
//     'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
//     'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
//     'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh',
//     'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep',
//     'Delhi', 'Puducherry', 'Ladakh', 'Jammu and Kashmir'
//   ];

//   return (
//     <div className="h-[80%] sm:mt-7 flex items-center justify-center">
//       <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
//         <h2 className="text-xl font-semibold text-center mb-5">Login</h2>

//         {/* Toggle between Email/Password and Phone/OTP login */}
//         <div className="mb-2 flex justify-center">
//           <button
//             className={`px-4 py-2 rounded-md ${!loginWithOtp ? 'bg-[#6279B8] text-white' : 'bg-gray-300'}`}
//             onClick={() => setLoginWithOtp(false)}
//           >
//             Login with Email
//           </button>
//           <button
//             className={`px-4 py-2 ml-4 rounded-md ${loginWithOtp ? 'bg-[#6279B8] text-white' : 'bg-gray-300'}`}
//             onClick={() => setLoginWithOtp(true)}
//           >
//             Login with Phone
//           </button>
//         </div>

//         <form onSubmit={loginWithOtp ? handleOtpLogin : handleLogin}>
//           {!loginWithOtp ? (
//             <>
//               {/* Email/Password Login */}
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 className="w-full h-10 px-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />

//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full h-10 px-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </>
//           ) : (
//             <>
//               {/* Phone Number/OTP Login */}
//               <input
//                 type="number"
//                 placeholder="Enter your phone number"
//                 className="w-full h-10 px-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//               />
//               {isOtpSent && (
//                 <input
//                   type="text"
//                   placeholder="Enter the OTP"
//                   className="w-full h-10 px-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   required
//                 />
//               )}
//             </>
//           )}

//           {/* State and District Selectors */}
//           <select
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//             className="w-full h-10 px-4 mb-2 text-base font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
//           >
//             {states.map((stateItem) => (
//               <option key={stateItem} value={stateItem}>{stateItem}</option>
//             ))}
//           </select>

//           <select
//             value={district}
//             onChange={(e) => setDistrict(e.target.value)}
//             className="w-full h-10 px-4 mb-4 text-base font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
//           >
//             {districts.map((dist) => (
//               <option key={dist} value={dist}>{dist}</option>
//             ))}
//           </select>

//           {/* Google ReCAPTCHA */}
//           {/* <ReCAPTCHA
//             sitekey="6Lfw60oqAAAAAP6WEMG_uT3BjpSi7gW5FKsLkySs"  // Replace with your reCAPTCHA site key
//             onChange={handleCaptchaChange}
//           /> */}

//           <input
//             type="submit"
//             className="w-full h-10 bg-[#6279B8] text-white text-lg font-medium rounded-md mt-4 cursor-pointer hover:bg-[#006653] transition-colors"
//             value={loginWithOtp ? (isOtpSent ? 'Verify OTP' : 'Send OTP') : 'Login'}
//           />
//         </form>

//         <div className="signup text-center mt-4">
//           <span>Don't have an account?{' '}
//             <Link
//               to="/signup"
//               className="text-[#6279B8] hover:underline font-medium"
//             >
//               Sign up
//             </Link>
//           </span> <br></br>
//           <a href="#" className="text-[#6279B8] hover:underline text-sm">
//             Forgot password?
//           </a>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from '../firebase/setup';
import { auth } from "../firebase/setup";
import SummaryApi from "../common/Apis";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loginWithOtp, setLoginWithOtp] = useState(false); // Toggle for email vs OTP login
  const [district, setDistrict] = useState("Pune"); // Default district
  const [state, setState] = useState("Maharashtra"); // Default state
  // const [captchaValid, setCaptchaValid] = useState(false);
  const navigate = useNavigate();

  if (!auth) {
    console.error("Firebase auth is not initialized.");
    return;
  }

  const configureCaptcha = () => {
    if (!window.recaptchaVerifier) {
      // Initialize ReCAPTCHA widget
      window.recaptchaVerifier = new RecaptchaVerifier(auth,
        "recaptcha-container", // This ID should match the div in your component for reCAPTCHA
        {
          size: "normal", // Available options: 'invisible', 'normal', 'compact'
        },
       
      );
      window.recaptchaVerifier.render(); // Render the reCAPTCHA widget
    }
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      toast.error("Please enter a phone number", { position: "top-right" });
      return;
    }
    if (!phoneNumber.startsWith("+")) {
      toast.error(
        "Please include country code in phone number (e.g., +91 for India)",
        { position: "top-right" }
      );
      return;
    }
    try {
      configureCaptcha();
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        window.recaptchaVerifier
      );
      window.confirmationResult = confirmationResult;
      setIsOtpSent(true);
      toast.success("OTP sent to your phone number", { position: "top-right" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send OTP", { position: "top-right" });
    }
  };

  const verifyOtp = async () => {
    try {
      const result = await window.confirmationResult.confirm(otp);
      const token = result.user.accessToken;
      localStorage.setItem("token", token);
      toast.success("Login successful!", { position: "top-right" });
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error("Invalid OTP. Please try again.", { position: "top-right" });
    }
  };


  // Email and Password Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        url: SummaryApi.signIn.url, // Use URL from the API configuration
        method: SummaryApi.signIn.method, // Use method from the API configuration
        data: {
          email,
          password,
          district,
          state,
        },
      });
      if (response.data.jwt_token) {
        localStorage.setItem("token", response.data.jwt_token);
        toast.success("Login successfully!", { position: "top-right" });

        setTimeout(() => {
          console.log("Navigating to dashboard");
          navigate("/dashbord");
        }, 500);
      } else {
        toast.error("Failed to receive token", { position: "top-right" });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response ? error.response.data : "An error occurred during login",
        { position: "top-right" }
      );
    }
  };



  const districts = [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ];

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Ladakh",
    "Jammu and Kashmir",
  ];

  return (
    <>
      <div className="h-[80%] mt-7 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
          <h2 className="text-xl font-semibold text-center mb-5">Login</h2>

          {/* Toggle between Email/Password and Phone/OTP login */}
          <div className="mb-2 flex justify-center">
            <button
              className={`px-4 py-2 rounded-md ${
                !loginWithOtp ? "bg-[#6279B8] text-white" : "bg-gray-300"
              }`}
              onClick={() => setLoginWithOtp(false)}
            >
              Login with Email
            </button>
            <button
              className={`px-4 py-2 ml-4 rounded-md ${
                loginWithOtp ? "bg-[#6279B8] text-white" : "bg-gray-300"
              }`}
              onClick={() => setLoginWithOtp(true)}
            >
              Login with Phone
            </button>
          </div>

          <form
            onSubmit={
              loginWithOtp ? (isOtpSent ? verifyOtp : sendOtp) : handleLogin
            }
          >
            {!loginWithOtp ? (
              <>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 px-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
              </>
            ) : (
              <>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full h-10 px-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                  required
                />
                {isOtpSent && (
                  <input
                    type="text"
                    placeholder="Enter the OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full h-10 px-4 mb-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                    required
                  />
                )}
                <div id="recaptcha-container"></div>
              </>
            )}

            <select value={state} onChange={(e) => setState(e.target.value)} 
              className="w-full h-10 px-4 mb-2 text-base font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              >
              {states.map((stateItem) => (
                <option key={stateItem} value={stateItem}>
                  {stateItem}
                </option>
              ))}
            </select>

            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full h-10 px-4 mb-2 text-base font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              {districts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>

            <input
              type="submit"
              className="w-full h-10 bg-[#6279B8] text-white text-lg font-medium rounded-md mt-4 cursor-pointer hover:bg-[#006653]"
              value={
                loginWithOtp ? (isOtpSent ? "Verify OTP" : "Send OTP") : "Login"
              }
            />
          </form>

          <div className="signup text-center mt-4">
            <span>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#6279B8] hover:underline font-medium"
              >
                Sign up
              </Link>
            </span>{" "}
            <br></br>
            <a href="#" className="text-[#6279B8] hover:underline text-sm">
              Forgot password?
            </a>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
