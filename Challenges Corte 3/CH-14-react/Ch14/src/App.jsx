import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavComponent from './Components/NavComponent';
import HomePage from './Pages/HomePage';
import IdPage from './Pages/idPage'; // Asegurarse de que empieza en mayúscula
import LoginPage from './Pages/LoginPage';
import './App.css';

const App = () => {
    const { user } = useSelector((state) => state.auth); // Para verificar si el usuario está autenticado

    return (
        <div className="app">
            <NavComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/idPage" element={<IdPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default App;

