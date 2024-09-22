
import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"; // Import the routes
import Navbar from "./Component/Navbar/Navbar";
import { PopModelContext } from "./Store/PopModelContext";
import PopModel from "./Component/Model/PopModel";
import Footer from "./Component/Footer/Footer";

function App() {
  const{popModel}=useContext(PopModelContext);
  return (
    <>
     <Navbar/>
     {popModel && <PopModel/>}
      {/* <div className="p-10 pl-28 h-[80vh] bg-[url('../public/images/BG.jpg')] bg-cover bg-center gap-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
       
        <div>
          <ServicesAvailable />
        </div> */}
        <div >
          <Router>
            <AppRoutes /> {/* Render the routes here */}
          </Router>
        </div>
      {/* </div> */}
      <div>
      <Footer/>
      </div>
    </>
  );
}

export default App;