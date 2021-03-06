import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {

    return ( 
        <div>
            <h1>Your new personal expense manager</h1>
            <button onClick={startLogin}>Login</button>
        </div>
     );
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})
 
export default connect(undefined, mapDispatchToProps)(LoginPage);