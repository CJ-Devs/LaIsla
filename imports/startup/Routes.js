import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import AirView from '../ui/AirView'
import Principal from '../ui/Principal'
import SignUp from '../ui/SignUp/SignUp'
import E404 from '../ui/Error/E404'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Principal} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Air" component={AirView} />
            <Route exact path="/*" component={E404} />
        </Switch>
    </Router>
);