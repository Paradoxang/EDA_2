import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBy, decrement } from '../redux/counterSlice';
import './CounterComponent.css';

const CounterComponent = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        const value = parseInt(prompt("Enter a value to increment by:"), 10);
        if (!isNaN(value)) {
            dispatch(incrementBy(value));
        }
    };

    return (
        <div className="counter">
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={handleIncrement}>Increment By</button>
        </div>
    );
};

export default CounterComponent;
