import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const PublicRoute = ({ 
    isAuth,
    component: Component,
    ...rest
}) => ( 
        <Route {...rest} component={(props) => (
            isAuth ? <Redirect to="/dashboard" /> : <Component {...props} />
        )}/>
     );


const mapStateToProps = (state) => ({
        isAuth: !!state.auth.uid
});
 
export default connect(mapStateToProps)(PublicRoute);