import React from 'react';
import './SomePrivateComponent.css';

const SomePrivateComponent = () => {
    return (
        <div className="private-page">
            <h1>Private Page</h1>
            <p>This content is only accessible by logged-in users.</p>
        </div>
    );
};

export default SomePrivateComponent;
