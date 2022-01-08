import React, {useState} from 'react'; 
import Logo from '../core/logo/Logo';
import { CSSTransition } from 'react-transition-group';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import Construction from '../core/construction/Construction';
import './Book.scss';

function Book(props) {
    const [menuToggle, setMenuToggle] = useState(false);
    function handleToggle(newValue) {
        setMenuToggle(!newValue);
    }
    return (
        <div className="book-page">
            <div className="mobile-header">
                <Logo />
                <Socials toggle={menuToggle} onChange={handleToggle}/>
                <CSSTransition
                    in={menuToggle}
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
                
                {!menuToggle && <span className="footer" role="img" aria-label="heart">Made with ❤️ by <a target="_blank" rel="noopener noreferrer" href="https://github.com/dannyc-dev/dannyc-dev.github.io">dannyc</a></span>}
            </div>
            <div className="book-feed" >
                <div className="under-construction-container">
                    <Construction />
                </div>
            </div>
        </div>
    )
}

export default Book;