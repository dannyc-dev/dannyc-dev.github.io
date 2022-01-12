import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./app/route-home/Home";
import About from "./app/route-about/About";
import Blog from "./app/route-blog/Blog";
import Blogs from "./app/route-blogs/Blogs";
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
            <Route exact path="/books" render={() => <Book />}/>
            <Route exact path="/blogs" render={() => <Blogs />}/>
            {/* Add custom path for new posts
            * Ex.
            *  <Route exact path="/example" render={(props) => <Blog {...props} />}/>
            */}
            <Route exact path="/battle-arena-2" render={(props) => <Blog {...props}/>}/>
            <Route exact path="/battle-arena" render={(props) => <Blog {...props}/>}/>

            <Route component={NotFound} status={404}/>
        </Switch> 
    )
}

export const AppRouter = withRouter(AppRouting);