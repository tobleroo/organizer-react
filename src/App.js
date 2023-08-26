
import './App.css';
import { useState, useEffect } from 'react';
import { isTokenExpired, getJwtToken } from './Api/OrganizerAuth';

import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/register";
import Calendar from './pages/calendar';
import Todo from './pages/todo';

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    
    if (isTokenExpired()) {
      setUserLoggedIn(true);
    }
  }, [userLoggedIn]);


  return (
    <div className="App">
      <Router>
          <Navbar setUserLoggedIn={setUserLoggedIn} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/todo" element={<Todo />} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
