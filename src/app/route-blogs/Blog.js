import React, {useState} from 'react';
import Logo from '../core/logo/Logo';
import { CSSTransition } from 'react-transition-group';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import StackSmash from './sts/StackSmash';
import './Blog.scss';

let MAP ={
    'StackSmash': StackSmash
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
                <Socials toggle={menuToggle} onChange={handleToggle}/>
                <CSSTransition
                    in={menuToggle}
                    className="overlay"
                    timeout={300}
                    classNames="alert-mobile"
                    unmountOnExit
                    // onEnter={() => console.log("enter")}
                    // onExited={() => console.log("exit")}
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
                    // onEnter={() => console.log("enter")}
                    // onExited={() => console.log("exit")}
                ><TwitterFeed menuValue={menuToggle} isMobile={false} menu={menuToggle} closeMenu={handleToggle}/>
                </CSSTransition>
                
                {!menuToggle && <span className="footer" role="img" aria-label="heart">Made with ❤️ by dannyc</span>}
            </div>
            <Target />
        </div>
    )
}

export default Blog;