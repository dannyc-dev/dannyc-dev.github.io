import React, {useState} from 'react'; 
import Logo from '../core/logo/Logo';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import Construction from '../core/construction/Construction';
import './About.scss';

function About() {
    const [menuToggle, setMenuToggle] = useState(false);
    function handleToggle(newValue) {
        setMenuToggle(!newValue);
    }
    return (
        <div className="about-page">
            <div className="mobile-header">
                <Logo />
                <Socials />
            </div>
            <div className='highlight'>
                <Logo />
                <Socials toggle={menuToggle} onChange={handleToggle}/>
                {menuToggle && <TwitterFeed />}
                {!menuToggle && <span className="footer" role="img" aria-label="heart">Made with ❤️ by dannyc</span>}
            </div>
            <div className="about-feed" >
                <div className="under-construction-container">
                    <Construction />
                </div>
            </div>
        </div>
    )
}

export default About;