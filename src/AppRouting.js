import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./app/route-home/Home";
import About from "./app/route-about/About";
import Blog from "./app/route-blog/Blog";
import Blogs from "./app/route-blogs/Blogs";
import Book from "./app/route-book/Book";
import NotFound from "./app/core/notfound/NotFound";

function AppRouting(props) {
    return (
        <Routes>  
            {/* <Route exact path="home" render={() => <Redirect to="/" />} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/books" element={<Book />} />
            <Route exact path="/blogs" element={<Blogs />} />
            {/* Add custom path for new posts
            * Ex.
            *  <Route exact path="/example-route" element={<Blog {...props} /> } />
            */}
            <Route exact path="/battle-arena-2" element={<Blog {...props} /> } />
            <Route exact path="/battle-arena" element={<Blog {...props} /> }/>
            <Route path="*" element={<NotFound />}/>

        </Routes>
    )
}

export const AppRouter = AppRouting;