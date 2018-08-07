import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import AirView from '../ui/AirView'
import Principal from '../ui/Principal';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/Air" component={AirView} />
        </Switch>
    </Router>
);