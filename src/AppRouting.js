import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./app/route-home/Home";
import About from "./app/route-about/About";
import Blog from "./app/route-blogs/Blog";
import Book from "./app/route-book/Book";
import NotFound from "./app/core/notfound/NotFound";

function AppRouting(props) {
    return (
        <Switch>  
            <Route exact path="/home">
                <Redirect to="/" />
            </Route>
            <Route exact path="/" render={() => <Home />}/>
            <Route exact path="/about" render={() => <About />}/>
            <Route exact path="/book" render={() => <Book />}/>
            {/* Add custom path for new posts
            * Ex.
            *  <Route exact path="/example" render={(props) => <Blog {...props} />}/>
            */}
            <Route exact path="/sts" render={(props) => <Blog {...props}/>}/>
            <Route exact path="/battle-arena" render={(props) => <Blog {...props}/>}/>

            <Route component={NotFound} status={404}/>
        </Switch> 
    )
}

export const AppRouter = withRouter(AppRouting);