import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const fakeUser = { username: 'john_doe' };
        dispatch({ type: 'LOGIN', payload: fakeUser });
        navigate('/');
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;

