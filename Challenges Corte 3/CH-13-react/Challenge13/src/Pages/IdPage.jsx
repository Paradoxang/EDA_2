import React from 'react';
import CounterComponent from '../Components/CounterComponent';
import './idPage.css';

const IdPage = () => {
    return (
        <div className="id-page">
            <h1>Increment a Decrement Page</h1>
            <p>Welcome to the Increment Decrement Page!</p>
            <CounterComponent />
        </div>
    );
};

export default IdPage;
