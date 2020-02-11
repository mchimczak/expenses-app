import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { firebase } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
// import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(app, document.getElementById('app'));
        hasRendered = true
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses())
            .then(() => renderApp());
        history.location.pathname === '/' ? history.push('/dashboard') : '';
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})