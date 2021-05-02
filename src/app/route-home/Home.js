import React, {useState} from 'react'; 
import Logo from '../core/logo/Logo';
import { CSSTransition } from 'react-transition-group';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import Feed from './components/feed/Feed';
import './Home.scss';

function Home() {
    const [menuToggle, setMenuToggle] = useState(false);
    function handleToggle(newValue) {
        setMenuToggle(!newValue);
    }

    return (
        <div className='home-page'>
            <div className="mobile-header">
                <Logo />
                <Socials toggle={menuToggle} onChange={handleToggle}/>
            </div>
            <div className='highlight'>
                <Logo />
                <Socials toggle={menuToggle} onChange={handleToggle}/>
                <CSSTransition
                    in={menuToggle}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => console.log("enter")}
                    onExited={() => console.log("exit")}
                ><TwitterFeed menuValue={menuToggle}/>
                </CSSTransition>
                
                {!menuToggle && <span className="footer" role="img" aria-label="heart">Made with ❤️ by dannyc</span>}
            </div>
            <Feed />
        </div>
    )
}

export default Home;