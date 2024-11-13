
// src/TodoApp.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { addTodo, removeTodo } from '../../store/todoSlice';

export const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (description) => {
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    };
    dispatch(addTodo(newTodo));
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
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
