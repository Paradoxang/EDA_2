// src/Pages/LoginPage.jsx
import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmail, loginWithGoogle } from '../redux/authSlice';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { user, status, error } = useSelector((state) => state.auth);

    const isAuthenticated = useMemo(() => !!user, [user]);

    const handleEmailLogin = (e) => {
        e.preventDefault();
        dispatch(loginWithEmail({ email, password }));
    };

    const handleGoogleLogin = () => {
        dispatch(loginWithGoogle());
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            {isAuthenticated ? (
                <p>Login successful! Welcome, {user.email}</p>
            ) : (
                <>
                    <form onSubmit={handleEmailLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Logging in...' : 'Login with Email'}
                        </button>
                    </form>
                    <button onClick={handleGoogleLogin} disabled={isAuthenticated}>
                        Login with Google
                    </button>
                    {status === 'failed' && <p className="error">{error}</p>}
                </>
            )}
        </div>
    );
};

export default LoginPage;
