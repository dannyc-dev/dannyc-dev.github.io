import React, {useState} from 'react';
import Logo from '../core/logo/Logo';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import RustPy from './rustpy/RustPy';
import './Blog.scss';

let MAP ={
    'RustPy': RustPy
}

function Blog(props) {
    let Target = MAP[props.blog];
    const [menuToggle, setMenuToggle] = useState(false);
    function handleToggle(newValue) {
        setMenuToggle(!newValue);
    }
    return (
        <div className='blog-page'>
            <div className="mobile-header">
                <Logo />
                <Socials />
            </div>
            <div className='highlight'>
                <Logo />
                <Socials toggle={menuToggle} onChange={handleToggle}/>
                {menuToggle && <TwitterFeed />}
            </div>
            <Target />
        </div>
    )
}

export default Blog;