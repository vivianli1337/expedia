import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"; 
//import logo from './logo.svg';
//import './App.css';
import NavigationBar from './Home/Navigation';
import { Homepage } from './Home/Homepage';
import ExploreLayout from './Explore/ExploreLayout';

function App() {
  return (
    <HashRouter>
    <NavigationBar />
    <Homepage />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/" element={<Navigate to="Explore" />} />
        </Routes>
      </div>
    <ExploreLayout />
    </HashRouter>
  );
}
export default App;
