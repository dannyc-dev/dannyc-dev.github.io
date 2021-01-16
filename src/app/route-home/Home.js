import React from 'react'; 
import Logo from './components/logo/Logo';
import LoremIpsum from '../core/lorem_ipsum';
import Socials from './components/socials/Socials';
import './Home.scss';

function Home() {
    return (
        <div className='home-page'>
            <div className='highlight'>
                <Logo />
                <Socials />
            </div>
            <div className='feed'>
            </div>
        </div>
    )
}

export default Home;