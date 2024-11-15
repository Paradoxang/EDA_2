import React, { useState } from 'react';
import axios from 'axios';

const TodoComponent = ({ fetchTodos }) => {
  const [todoText, setTodoText] = useState('');

  const addTodo = async () => {
    if (todoText.trim()) {
      try {
        await axios.post('http://localhost:5984/todos', {
          text: todoText,
          completed: false,
        });
        setTodoText('');
        fetchTodos();  // Actualiza la lista de TODOs después de agregar uno nuevo
      } catch (error) {
        console.error("Error adding TODO:", error);
      }
    }
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
    </div>
  );
};

export default TodoComponent;
