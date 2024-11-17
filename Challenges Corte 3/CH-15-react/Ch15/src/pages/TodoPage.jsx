import './TodoPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoComponent from '../components/TodoComponent';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5984/todos/_all_docs?include_docs=true');
      setTodos(response.data.rows.map((row) => row.doc)); // Extrae los documentos
    } catch (error) {
      console.error("Error al obtener los TODOs desde CouchDB:", error);
    }
  };

  // Función para eliminar un TODO por ID
  const deleteTodo = async (id, rev) => {
    try {
      await axios.delete(`http://localhost:5984/todos/${id}?rev=${rev}`);
      fetchTodos(); // Actualiza la lista después de borrar
    } catch (error) {
      console.error("Error al eliminar el TODO desde CouchDB:", error);
    }
  };

  const toggleStatus = async (id, rev, currentStatus) => {
    try {
      await axios.put(`http://localhost:5984/todos/${id}`, {
        _rev: rev, // Revisión actual del documento
        completed: !currentStatus, // Alterna el estado actual
      });
      fetchTodos(); // Actualiza la lista después de cambiar el estado
    } catch (error) {
      console.error("Error al cambiar el estado del TODO:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>TODO List</h1>
      <TodoComponent fetchTodos={fetchTodos} todos={todos} />
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.id}. {todo.text} - {todo.completed ? 'Done' : 'Pending'}
            <button onClick={() => toggleStatus(todo._id, todo._rev, todo.completed)}>
              Toggle Status
            </button>
            <button onClick={() => deleteTodo(todo._id, todo._rev)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;