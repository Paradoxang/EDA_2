import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterApp from './CounterApp';  // Importar el nuevo componente CounterApp
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp />  {/* Desplegar el componente CounterApp */}
  </React.StrictMode>
);