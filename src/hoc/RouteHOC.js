import React from 'react';
import { isEmpty } from 'lodash';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(props) => (
            !isEmpty(rest.userInfo) ? 
            <Component {...props} /> : <Redirect to={{pathname: '/', state: { from: props.location }}} />   
            )}
        />
    )
};

export const RedirectRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(props) => (
            isEmpty(rest.userInfo) ? 
            <Component {...props} /> : <Redirect to={{ pathname: '/astm' }} />   
            )}
        />
    )
};

export default {
    ProtectedRoute,
    RedirectRoute
}