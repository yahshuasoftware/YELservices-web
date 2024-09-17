import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-gray-600 p-10 ">
              <div>
                <ul className=" flex pl-24">
                  <li className="text-sm  p-1 hover:underline cursor-pointer text-white"> <a>Disclaimer and Policies</a> | </li>
                  <li className="text-sm  p-1 hover:underline cursor-pointer text-white"><a>Accessibility Statement</a> | </li>
                  <li className="text-sm  p-1 hover:underline cursor-pointer text-white"> <a>Sitemap</a> |</li>
                  <li className="text-sm  p-1 hover:underline cursor-pointer text-white"><a>Help</a></li>
                </ul>
                <div class="clearfix"></div>
                <span  className="text-sm pl-24 p-1 text-white" >
                  Copyright &#169; 2015 Maharashtra Information Technology
                  Corporation, All Rights Reserved <b class="serverid">B | </b>
                </span>
                <div class="clearfix"></div>
                <span  className="text-sm pl-24  p-1 text-white">
                  Best Viewed on internet explorer 9+, firefox, Chrome |
                </span>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12 footer-logo">
                <a href="#" target="_blank">
                  {/* <img src="../../images/wc.png" class="pull-left img-responsive" alt="compliance" /> */}
                </a>
                <a class="ExternalLinkClick" rel="follow" target="_blank">
                  {/* <img src="../../Images/Maha_IT_LogoB.png" alt="MahaIT Corporation Limited" class="pull-right img-responsive" /> */}
                </a>
              </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
