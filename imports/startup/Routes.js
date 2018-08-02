import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Greeting from '../ui/Greeting'
//import AirView from './imports/worlds/server/AirView'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Greeting} />
        </Switch>
    </Router>
);