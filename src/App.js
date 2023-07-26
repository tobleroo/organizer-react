
import './App.css';

import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/register";
import Calendar from './pages/calendar';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calendar" element={<Calendar />} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
