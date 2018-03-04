import React from 'react';
import App from './components/App'
import Dashboard from './components/dashboard';
import Main from './components/login_and_signup';
import LogIn from './components/log_in';
import SignUp from './components/sign_up';
import { Route, IndexRoute } from 'react-router';

export default (
    <Route path="/" component={App}> 
        <IndexRoute component={Main}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/signup" component={SignUp}/>
    </Route >
);