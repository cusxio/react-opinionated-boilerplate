import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import json from '../public/md.json';
import routes from './router/routes';

const clientSide = (
    <Router history={browserHistory}>
        {routes}
    </Router>
);

render(clientSide, document.getElementById('app'));
