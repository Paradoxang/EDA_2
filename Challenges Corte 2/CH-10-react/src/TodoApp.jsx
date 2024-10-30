
import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './TodoApp.css';
import { useTodo } from './useTodo';

export const TodoApp = () => {
    const {
        todos,
        handleAddTodo,
        handleDelete,
        handleToggle,
        countTodos,
        countPendingTodos
    } = useTodo();

    return (
        <>
            <h1>
                TodoApp: {countTodos()} <small>Pendientes: {countPendingTodos()}</small>
            </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <TodoForm handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </>
    );
};