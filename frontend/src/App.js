<<<<<<< HEAD
import "./App.css";
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
  );
}

export default App;
