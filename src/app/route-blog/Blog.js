import React, {useState} from 'react';
import Logo from '../core/logo/Logo';
import { CSSTransition } from 'react-transition-group';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import { useMediaQuery } from 'react-responsive';
import { useParams } from "react-router-dom";

// Import componenets
import NineLives from './nine-lives/NineLives';
import Barena from './barena/Barena';
import D3D from './d3d-template/D3D';

import './Blog.scss';

// Map components
let MAP ={
    'nine-lives': NineLives,
    'battle-arena': Barena,
    'd3d-template': D3D,
}

function Blog(props) {
    let params = useParams();
    let Target = MAP[params.blogId];
    const [menuToggle, setMenuToggle] = useState(false);

    function handleToggle(newValue) {
        setMenuToggle(!newValue);
    }

    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 480px)'
    })

    return (
        <div className='blog-page'>
            <div className="mobile-header">
                <Logo />
                <Socials toggle={menuToggle} onChange={handleToggle} isMobile={isMobileDevice}/>
                <CSSTransition
                    in={menuToggle}
                    timeout={300}
                    classNames="alert-mobile"
                    unmountOnExit
                    >
                    <TwitterFeed menuValue={menuToggle} isMobile={true} menu={menuToggle} closeMenu={handleToggle}/>
                </CSSTransition>
            </div>
            <div className='highlight'>
                <Logo />
                <Socials toggle={menuToggle} onChange={handleToggle}/>
                <CSSTransition
                    in={menuToggle}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                ><TwitterFeed menuValue={menuToggle} isMobile={false} menu={menuToggle} closeMenu={handleToggle}/>
                </CSSTransition>
                
                {!menuToggle && <span className="footer" role="img" aria-label="heart">Made with ❤️ by <a target="_blank" rel="noopener noreferrer" href="https://github.com/dannyc-dev/dannyc-dev.github.io">dannyc</a></span>}
            </div>
            <Target isMobile={isMobileDevice}/>
        </div>
    )
}

export default Blog;