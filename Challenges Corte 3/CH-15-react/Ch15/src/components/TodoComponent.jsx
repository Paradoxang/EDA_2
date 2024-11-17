import React, { useState } from 'react';
import axios from 'axios';

const TodoComponent = ({ fetchTodos, todos }) => {
  const [todoText, setTodoText] = useState('');
  const [message, setMessage] = useState('');

  // Función para calcular el siguiente ID
  const getNextId = () => {
    if (todos.length === 0) return 1; // Si no hay TODOs, el ID inicial es 1
    const ids = todos.map((todo) => todo.id || 0); // Obtener todos los IDs existentes
    return Math.max(...ids) + 1; // Retorna el siguiente número secuencial
  };

  const addTodo = async () => {
    if (todoText.trim()) {
      const newId = getNextId(); // Calcula el ID para el nuevo TODO
      try {
        await axios.post('http://localhost:5984/todos', {
          _id: newId.toString(), // Usamos el ID como string para CouchDB
          id: newId, // Guardamos el ID también como un campo normal
          text: todoText,
          completed: false,
        });
        setTodoText('');
        setMessage('TODO added successfully!');
        fetchTodos(); // Actualiza la lista de TODOs
      } catch (error) {
        setMessage('Error adding TODO. Check console for details.');
        console.error("Error al guardar el TODO en CouchDB:", error);
      }
    } else {
      setMessage('TODO text cannot be empty!');
    }
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new TODO"
      />
      <button onClick={addTodo}>Add</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TodoComponent;
