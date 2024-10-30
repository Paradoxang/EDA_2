
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))}
        </ul>
    );
};

export default TodoList;