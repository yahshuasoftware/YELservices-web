import React from 'react';
import Sidebar from './Sidebar';

const ContactUs = () => {
  return (
    <div className="flex items-center flex-col md:flex-row">
      {/* <Sidebar /> */}
      {/* Main Container */}
      <div className="w-full mx-4 max-w-4xl text-center p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-700 border-b-2 border-gray-300 pb-2 mb-6">
          Contact Us
        </h2>

        {/* Description */}
        <p className="text-lg mb-6">
          If you want to know anything about services on this portal under Right to Services Act 2015 or any other information, please call on the below phone number. 
          Our call centre representative will help you.
        </p>

        {/* Call Center Info */}
        <div className="bg-red-100 p-6 rounded-md shadow-lg max-w-2xl mx-auto">
          <p className="text-sm text-red-500 mb-2">
            For Queries Contact numbers for clarifications
          </p>
          <h3 className="text-2xl font-bold text-gray-700">
            24 x 7 Citizen Call Center: 1234 567 890
          </h3>
          <p className="text-lg text-gray-700 mt-2">(Toll Free)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
