import React from 'react'; 
import Logo from './components/logo/Logo';
import TwitterFeed from './components/twitterfeed/TwitterFeed';
import Socials from './components/socials/Socials';
import './Home.scss';

function Home() {
    return (
        <div className='home-page'>
            <div className="mobile-header">
                <Logo />
                <Socials />
            </div>
            <div className='highlight'>
                <Logo />
                <Socials />
                <TwitterFeed/>
            </div>
            <div className='feed'>
            </div>
        </div>
    )
}

export default Home;