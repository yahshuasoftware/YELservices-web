import React from "react";
import { Routes, Route} from "react-router-dom";
import UplodeServices from "../pages/UplodeServices";
import Dashbord from "../pages/Dashbord";
import Home from "./Home";
import Agriculture from "../Component/Dashboard/Agriculture";
import ContactUs from "../Component/Dashboard/ContactUs";
import UserSidebar from "../Component/UserSidebar";
// import DepartmentChart from "../pages/DepartmentChart"

const token = localStorage.getItem('token');
const AppRoutes = () => {
  return (
    <>
          <Routes>
            {!token && <Route path="*" element={<Home />} />} 
            {/* If no token, show Home route */}
            {/* {token && <Route path="*" element={<Navigate to="/dashbord" />} />}  */}
            {/* If token exists, redirect to dashboard */}
            <Route path="*" element={<Home/>}/>
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="/service" element={<UplodeServices />} />
            {/* <Route path="/dashbord" element={<DepartmentChart/>} />  */}
            <Route path="/Agriculture" element={<Agriculture/>} />
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/userSidebar" element={<UserSidebar/>}/>
            
          </Routes>
     </>
  );
};

export default AppRoutes;
