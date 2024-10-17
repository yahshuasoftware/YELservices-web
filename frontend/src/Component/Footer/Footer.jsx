import React from "react";

const Footer = () => {
  return (
    <div className=" md:w-full sm:w-full lg:w-full ">
    <footer>
      <div className="bg-gray-600 p-5">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row md:pl-0 pl-4">
            <li className="text-sm p-1 hover:underline cursor-pointer text-white">
              <a href="#">Disclaimer and Policies</a>
            </li>
            <li className="text-sm p-1 hover:underline cursor-pointer text-white">
              <a href="#">Accessibility Statement</a>
            </li>
            <li className="text-sm p-1 hover:underline cursor-pointer text-white">
              <a href="#">Sitemap</a>
            </li>
            <li className="text-sm p-1 hover:underline cursor-pointer text-white">
              <a href="#">Help</a>
            </li>
          </ul>
  
          {/* Copyright and Other Information */}
          <div className="text-sm text-white mt-4 md:mt-0 md:text-right">
            <span className="pl-0 md:pl-4 p-1">
              Copyright &#169; 2015 Maharashtra Information Technology Corporation, All Rights Reserved
              <b className="serverid">B | </b>
            </span>
            <span className="p-1">
              Best Viewed on Internet Explorer 9+, Firefox, Chrome |
            </span>
          </div>
        </div>
  
        {/* Logo Section */}
        <div className="mt-4 flex justify-center md:justify-between">
          <a target="_blank" rel="noopener noreferrer">
            {/* <img src="../../images/wc.png" className="w-1/4 md:w-1/8" alt="compliance" /> */}
          </a>
          <a className="ExternalLinkClick" rel="noopener noreferrer" target="_blank">
            {/* <img src="../../Images/Maha_IT_LogoB.png" alt="MahaIT Corporation Limited" className="w-1/4 md:w-1/8" /> */}
          </a>
        </div>
      </div>
    </footer>
  </div>
  

  );
};

export default Footer;
