import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './NavComponent.css';

const NavComponent = () => {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    };

    return (
        <nav className="nav-bar">
            <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            <NavLink to="/about" activeClassName="active-link">About</NavLink>
            {!state.isAuthenticated ? (
                <NavLink to="/login" activeClassName="active-link">Login</NavLink>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )}
        </nav>
    );
};

export default NavComponent;
