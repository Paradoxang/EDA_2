
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleDelete }) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
            ))}
        </ul>
    );
};

export default TodoList;
