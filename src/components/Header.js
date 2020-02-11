import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <ul>
                <NavLink to="/" activeClassName="is-active" exact >Home</NavLink>
                <NavLink to="/create" activeClassName="is-active">Create</NavLink>
                <button onClick={startLogout}>Log out</button>
            </ul>
        </nav>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);