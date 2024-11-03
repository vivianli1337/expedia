import { Routes, Route, Navigate } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles.css";
import { Homepage } from "./Homepage";
import NavigationBar from './Navigation';

export default function Home() {
  return (
    <div id="wd-home">
      <div className="wd-main-content-offset p-3">
        <NavigationBar/ >
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
        </Routes>
      </div>
    </div>
  );
}