import React, {useState} from 'react'; 
// import { ReactComponent as TwitterIcon} from '../../../assets/twitter.svg';
// import { ReactComponent as GithubIcon} from '../../../assets/github.svg';
// import { ReactComponent as LinkedinIcon} from '../../../assets/linkedin.svg';
// import { ReactComponent as TwitchIcon} from '../../../assets/twitch.svg';
import { ReactComponent as MenuIcon} from '../../../assets/burger.svg';
import "./Socials.scss";
import MobileGoHome from '../mobilegohome/MobileGoHome';

function Socials(props) {
    const [menuAnimation, setMenuAnimation] = useState(false);
    function handleChange(event) {
        props.onChange(props.toggle);
        
    }
    return (
        <div className="social-bar-container">
            {props.isMobile &&
                <div className="social-mobile-home">
                    <MobileGoHome />
                </div>
            }
            <div className="socials-container">
                <ul>
                    <li>
                        <div className={!menuAnimation ? "menu-animate-back menu-anchor" : "menu-animate menu-anchor"} onClick={(e) => {handleChange(e); setMenuAnimation(!menuAnimation)}} onAnimationEnd={() => setMenuAnimation(menuAnimation)}><MenuIcon className="menu"/></div>
                    </li>
                    {menuAnimation &&
                    <>
                        {/* <li>
                            <a href="https://twitter.com/dannyc_dev" target="_blank" rel="noreferrer"><TwitterIcon className="icon twitter"/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/danny-colmenares/" target="_blank" rel="noreferrer"><LinkedinIcon className="icon linkedin"/></a>
                        </li>
                        <li>
                            <a href="https://github.com/dannyc-dev" target="_blank" rel="noreferrer"><GithubIcon className="icon"/></a>
                        </li>
                        <li>
                            <a href="https://www.twitch.tv/dannyc_dev" target="_blank" rel="noreferrer"><TwitchIcon className="icon twitch"/></a>
                        </li> */}
                    </>
                    }
                    
                </ul>
            </div>
        </div>

        
    )
}

export default Socials;