import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"; 
//import logo from './logo.svg';
//import './App.css';
import NavigationBar from './Home/Navigation';
import { Homepage } from './Home/Homepage';
import ExploreLayout from './Explore/ExploreLayout';
import ConfirmationPage from './Flights/Confirmation';

function App() {
  return (
    <HashRouter>
    <NavigationBar />
      <div>
        <Routes>
         <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/Home/*" element={<Homepage />} />
          <Route path="/Explore/ExploreLayout" element={<ExploreLayout />} /> 
          <Route path="/confirmation" element={<ConfirmationPage />} /> 
       </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
