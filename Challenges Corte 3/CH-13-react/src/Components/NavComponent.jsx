import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => 
    { return ( 
    <nav className="nav-bar"> 
    <NavLink exact to="/" activeClassName="active-link">Home</NavLink> 
    <NavLink to="/about" activeClassName="active-link">About</NavLink> 
    <NavLink to="/login" activeClassName="active-link">Login</NavLink> 
    <div className="counter-controls">
                <p>Counter: {count}</p>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(incrementBy(5))}>Increment by 5</button>
            </div>
    </nav> 
    ); 
};
  
  export default NavComponent;
