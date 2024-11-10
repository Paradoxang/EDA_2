import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App'//
import FirstApp from './FirstApp'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Aquí desplegamos el componente FirstApp */}
    <FirstApp />
  </React.StrictMode>
);