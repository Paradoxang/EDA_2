import React, { useState } from 'react';

const TodoForm = ({ handleAddTodo }) => {
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            handleAddTodo(description);
            setDescription(''); // Clear input field
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Nueva tarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
                Agregar
            </button>
        </form>
    );
};

export default TodoForm;