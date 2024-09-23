import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UplodeServices from "../pages/UplodeServices";
import Dashbord from "../pages/Dashbord";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <>
          <Routes>
            <Route path="*" element={<Home/>}/>
            <Route path="/" element={<Navigate to="/login" />} />{" "}
            {/* Redirect root to login */}
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="/service" element={<UplodeServices />} />
          </Routes>
        {/* </div>
      </div> */}
    </>
  );
};

export default AppRoutes;
