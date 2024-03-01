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



import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAR8wp5bw0VXB86LN5eMfPnBPJoENnmuyA",
  authDomain: "laundrytrackerswat.firebaseapp.com",
  projectId: "laundrytrackerswat",
  storageBucket: "laundrytrackerswat.appspot.com",
  messagingSenderId: "855604861369",
  appId: "1:855604861369:web:bf72d5b5312cc3bc8bbe68",
  measurementId: "G-QWZWJV0Z09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);



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


  