import { useReducer } from 'react';
import { TodoReducer } from './TodoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Hacer los challenges',
        done: false
    }
];

export const useTodo = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState);

    const handleAddTodo = (description) => {
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        };
        dispatch({ type: '[TODO] add todo', payload: newTodo });
    };

    const handleDelete = (id) => {
        dispatch({ type: '[TODO] remove todo', payload: id });
    };

    const handleToggle = (id) => {
        dispatch({ type: '[TODO] toggle todo', payload: id });
    };

    const countTodos = () => todos.length;
    const countPendingTodos = () => todos.filter(todo => !todo.done).length;

    return {
        todos,
        handleAddTodo,
        handleDelete,
        handleToggle,
        countTodos,
        countPendingTodos
    };
};