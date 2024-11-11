import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './Components/PrivateRoutes';
import { AuthContext } from './Context/AuthContext';
import SomePrivateComponent from './Pages/SomePrivateComponent';
import './App.css';

const App = () => {
    const { state, dispatch } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (state.isAuthenticated) {
            dispatch({ type: 'SET_LAST_PAGE', payload: location.pathname });
        }
    }, [location, state.isAuthenticated, dispatch]);

    useEffect(() => {
        if (state.isAuthenticated && state.lastPage) {
            window.location.pathname = state.lastPage;
        }
    }, [state.isAuthenticated, state.lastPage]);

    return (
        <div className="app">
            <NavComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/private" element={<PrivateRoute component={SomePrivateComponent} />} />
            </Routes>
            {state.isAuthenticated && <p>Welcome, {state.user.username}!</p>}
        </div>
    );
};

export default App;
