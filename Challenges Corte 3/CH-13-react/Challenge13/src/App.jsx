// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavComponent from './Components/NavComponent';
import HomePage from './Pages/HomePage';
import IdPage from './Pages/idPage';  // Cambia a "IdPage"
import LoginPage from './Pages/LoginPage';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <NavComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/idPage" element={<IdPage />} />  {/* Cambia a "IdPage" */}
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default App;
