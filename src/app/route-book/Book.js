import React, {useState} from 'react'; 
import Logo from '../core/logo/Logo';
import { CSSTransition } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import BookFeed from './book-feed/BookFeed';
import './Book.scss';

function Book(props) {
    const [menuToggle, setMenuToggle] = useState(false);
    function handleToggle(newValue) {
        setMenuToggle(!newValue);
    }

    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 480px)'
    })
    
    return (
        <div className={"book-page"}>
            {isMobileDevice &&
                <div className="mobile-header no-scroll">
                    <Logo />
                    <Socials toggle={menuToggle} onChange={handleToggle} isMobile={isMobileDevice}/>
                    <CSSTransition
                        in={menuToggle}
                        timeout={300}
                        classNames="alert-mobile"
                        unmountOnExit
                        >
                        <TwitterFeed menuValue={menuToggle} isMobile={isMobileDevice} menu={menuToggle} closeMenu={handleToggle}/>
                    </CSSTransition>
                </div>
            }
            {!isMobileDevice &&
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
                    ><TwitterFeed menuValue={menuToggle} isMobile={isMobileDevice} menu={menuToggle} closeMenu={handleToggle}/>
                    </CSSTransition>
                    
                    {!menuToggle && <span className="footer" role="img" aria-label="heart">Made with ❤️ by <a target="_blank" rel="noopener noreferrer" href="https://github.com/dannyc-dev/dannyc-dev.github.io">dannyc</a></span>}
                </div>
            }
            <BookFeed />
        </div>
    )
}

export default Book;