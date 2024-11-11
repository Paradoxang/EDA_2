import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { state } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props =>
                state.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
