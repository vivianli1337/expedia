import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom"; 
//import logo from './logo.svg';
//import './App.css';
import Home from "./Home";
import NavigationBar from './Home/Navigation';

function App() {
  return (
    <HashRouter>
    <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
