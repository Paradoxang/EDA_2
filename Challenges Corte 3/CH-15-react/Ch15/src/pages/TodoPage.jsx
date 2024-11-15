// src/components/TodoPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoComponent from '../components/TodoComponent';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5984/todos/_all_docs?include_docs=true');
      setTodos(response.data.rows.map(row => row.doc));
    } catch (error) {
      console.error("Error fetching TODOs:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>TODO List</h1>
      <TodoComponent fetchTodos={fetchTodos} />
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
