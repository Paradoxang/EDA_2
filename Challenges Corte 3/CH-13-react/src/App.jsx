import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './Components/NavComponent';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import './App.css';

const App = () => {
  return (
      <div className="app">
          <NavComponent />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
      </div>
  );
};

export default App;




