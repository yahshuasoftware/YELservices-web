
import "./App.css";
import ServicesAvailable from "./Component/Services/ServicesAvailable";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; // Import the routes

function App() {
  return (
  <>  
    <div>
      <ServicesAvailable/>
      </div>

    <Router>
      <AppRoutes /> {/* Render the routes here */}
    </Router>
    </>

    
  );
}

export default App;
