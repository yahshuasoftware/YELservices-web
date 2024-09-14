<<<<<<< HEAD
import "./App.css";
<<<<<<< HEAD
import ServicesAvailable from "./Component/Services/ServicesAvailable";

function App() {
  return (
    <div>
      <ServicesAvailable/>
    </div>
=======
=======
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes'; // Import the routes
>>>>>>> tushar

function App() {
  return (
    <Router>
      <AppRoutes /> {/* Render the routes here */}
    </Router>
>>>>>>> 34168262b3940812b45c7064d66f43aed55c7dc9
  );
}

export default App;
