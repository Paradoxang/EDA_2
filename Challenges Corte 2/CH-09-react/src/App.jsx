import './App.css';
import React from 'react';
import { TodoApp } from './TodoApp';

const App = () => {
  return (
    <div>
      <TodoApp />  {/* Render the Father component */}
    </div>
  );
};

export default App;
