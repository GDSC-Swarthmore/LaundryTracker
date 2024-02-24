import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import "./App.css";

import HomePage from './HomePage';
import CurrentCyclePage from './CurrentCyclePage';
import SelectLocationPage from './SelectLocationPage';
import NavBar from './NavBar';
import { initializeFirebase } from '/util/firebaseConfig.js'

initializeFirebase();

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/SelectLocationPage" element={<SelectLocationPage />} />
            <Route path="/CurrentCyclePage" element={<CurrentCyclePage />} />
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

  export default App;


  