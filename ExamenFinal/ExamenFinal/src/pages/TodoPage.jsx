import React from 'react';
import './TodoPage.css';
import { TodoApp } from '../components/TodoComponents/TodoApp';

const TodoPage = () => {
  return (
    <div className="todo-page">
      <h1>Todo Page</h1>
      <TodoApp />
    </div>
  );
};

export default TodoPage;

