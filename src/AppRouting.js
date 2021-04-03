import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./app/route-home/Home";
import About from "./app/route-about/About";
import Blog from "./app/route-blogs/Blog";
import NotFound from "./app/core/notfound/NotFound";

function AppRouting(props) {
    return (
        <Switch>  
            <Route exact path="/home">
                <Redirect to="/" />
            </Route>
            <Route exact path="/" render={() => <Home />}/>
            <Route exact path="/about" render={() => <About />}/>
            <Route exact path="/rustpy" render={() => <Blog blog='RustPy' />}/>
            <Route component={NotFound} status={404}/>
        </Switch> 
    )
}

export const AppRouter = withRouter(AppRouting);