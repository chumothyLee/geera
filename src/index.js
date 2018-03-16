import React from 'react';
import { render } from 'react-dom';
import css from './index.css';
import routes from './routes.js';
import {Provider} from 'react-redux';
import configureStore from './store/configure_store';
import {loadProjects} from './actions/project_actions';
import { Router, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import initialState from './reducers/initial_state';

const store = configureStore(initialState);
store.dispatch(loadProjects());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider >,
    document.getElementById('root')
);
registerServiceWorker();

