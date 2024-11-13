// src/App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponents/NavComponent';
import TodoPage from './pages/TodoPage';
import HomePage from './pages/HomePage';
import PokePage from './pages/PokePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todoapp" element={<TodoPage />} />
          <Route path="/pokepage" element={<PokePage />} /> {/* Add route for PokePage */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


