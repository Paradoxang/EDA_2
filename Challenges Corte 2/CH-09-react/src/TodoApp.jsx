
import React, { useReducer } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodoReducer } from './TodoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done: false
    }
];

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

    const handleAddTodo = (description) => {
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        dispatchTodo({ type: '[TODO] add todo', payload: newTodo });
    };

    const handleDelete = (id) => {
        dispatchTodo({ type: '[TODO] remove todo', payload: id });
    };

    return (
        <>
            <h1>TodoApp: {todos.length} <small>Pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <TodoForm handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    );
};
