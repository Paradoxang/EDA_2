import React, { createContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true, user: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null };
        case 'SET_LAST_PAGE':
            return { ...state, lastPage: action.payload };
        default:
            return state;
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: null,
        lastPage: '/'
    });

    useEffect(() => {
        const lastPage = localStorage.getItem('lastPage');
        if (lastPage) {
            dispatch({ type: 'SET_LAST_PAGE', payload: lastPage });
        }
    }, []);

    useEffect(() => {
        if (state.lastPage) {
            localStorage.setItem('lastPage', state.lastPage);
        }
    }, [state.lastPage]);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
