import React, {useState} from 'react'; 
import Logo from '../core/logo/Logo';
import { CSSTransition } from 'react-transition-group';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import AboutPreview from './about-preview/AboutPreview';
import GoHome from '../core/gohome/GoHome';
import './About.scss';

function About() {
    const [menuToggle, setMenuToggle] = useState(false);
    function handleToggle(newValue) {
        setMenuToggle(!newValue);
    }
    return (
        <div className="about-page">
            <div className="mobile-header no-scroll">
                <Logo />
                <Socials toggle={menuToggle} onChange={handleToggle}/>
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
            {!menuToggle && 
                <div className="about-feed">
                    <GoHome />
                    <AboutPreview />
                </div>
            }
        </div>
    )
}

export default About;