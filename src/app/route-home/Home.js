import React from 'react'; 
import Logo from '../core/logo/Logo';
import TwitterFeed from '../core/twitterfeed/TwitterFeed';
import Socials from '../core/socials/Socials';
import Feed from './components/feed/Feed';
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
            <Feed />
        </div>
    )
}

export default Home;