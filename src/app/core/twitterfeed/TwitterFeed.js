import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { ReactComponent as InfoIcon } from '../../../assets/superhero.svg';
import { ReactComponent as BlogIcon } from '../../../assets/content.svg';
import { ReactComponent as ContactIcon } from '../../../assets/plane.svg';
import { ReactComponent as HomeIcon } from '../../../assets/house.svg';
import { ReactComponent as CloseIcon } from '../../../assets/cancel.svg';
import './TwitterFeed.scss';

function TwitterFeed(props) {
    let history = useHistory();
    const location = useLocation();
    const [showHome, setShowHome] = useState(false);
    useEffect(() => {
        // Twitter Feed Load
        // const script = document.createElement("script");
        // script.src = "https://platform.twitter.com/widgets.js";
        // document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    function close_menu(event) {
        props.closeMenu(props.menu);
    }

    const redirect = (route) => { 
        if ((route === "home") && (location.pathname === "/")) {
            props.closeMenu(props.menu);
        } else if (location.pathname !== '/' + route) {
            history.push(route);
        } else {
            props.closeMenu(props.menu);
        }
    }

    return (
        <section className={"twitterContainer"}>
            <div className="close-menu">
                <CloseIcon className="close-icon" onClick={(e) => {close_menu(e)}}/>
            </div>
            <div className="menu-container">
                <div className="menu-item" onClick={(e) => {redirect('home');}}>
                    <HomeIcon className="home"/>
                    <div className="about">Home</div>
                </div>
                <div className="menu-item" onClick={() => {redirect('about')}}>
                    <InfoIcon className="info"/>
                    <div className="about">About</div>
                </div>
                <div className="menu-item">
                    <BlogIcon className="blog"/>
                    <div className="about">Blog</div>
                </div>
                <div className="menu-item" onClick={() => {redirect('contact')}}>
                    <ContactIcon className="contact"/>
                    <div className="about">Contact</div>
                </div>
            </div>
            <div className="twitter-embed">
                {/* <a
                    className="twitter-timeline"
                    data-tweet-limit="4"
                    data-chrome="noheader nofooter noscrollbar"
                    href="https://twitter.com/dannyc_dev"
                /> */}
            </div>
        </section>
    )
}

export default TwitterFeed;