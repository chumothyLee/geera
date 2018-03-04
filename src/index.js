import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes.js';
import { Router, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
registerServiceWorker();

