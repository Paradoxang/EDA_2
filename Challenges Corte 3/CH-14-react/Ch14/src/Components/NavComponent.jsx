// src/Components/NavComponent.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="nav-bar">
            <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            <NavLink to="/idPage" activeClassName="active-link">I+DPage</NavLink>
            {!user ? (
                <NavLink to="/login" activeClassName="active-link">Login</NavLink>
            ) : (
                <button onClick={handleLogout} className="logout-button">Logout</button>
            )}
        </nav>
    );
};

export default NavComponent;
