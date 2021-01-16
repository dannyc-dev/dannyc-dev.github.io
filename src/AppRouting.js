import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./app/route-home/Home";
import About from "./app/route-about/About";
import NotFound from "./app/core/notfound/NotFound";

function AppRouting(props) {
    return (
        <Switch>  
            <Route exact path="/home">
                <Redirect to="/" />
            </Route>
            <Route exact path="/" render={() => <Home />}/>
            <Route eact path="/about" render={() => <About />}/>
            <Route component={NotFound} status={404}/>
        </Switch> 
    )
}

export const AppRouter = withRouter(AppRouting);