import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { ReactComponent as InfoIcon } from '../../../assets/superhero.svg';
import { ReactComponent as BlogIcon } from '../../../assets/content.svg';
import { ReactComponent as BooksIcon } from '../../../assets/books.svg';
import { ReactComponent as HomeIcon } from '../../../assets/house.svg';
import { ReactComponent as CloseIcon } from '../../../assets/cancel.svg';
import  SwipeUp from '../../../assets/arrows.png';
import './TwitterFeed.scss';

function TwitterFeed(props) {
    let history = useHistory();
    const location = useLocation();
    // const [showHome, setShowHome] = useState(false);
    const [touchStartY, setTouchStartY] = useState(0);
    const [touchEndY, setTouchEndY] = useState(0);

    function handleTouchStart(e) {
        setTouchStartY(e.targetTouches[0].clientY);
    }

    function handleTouchMove(e) {
        setTouchEndY(e.targetTouches[0].clientY);
    }

    function handleTouchEnd(e) {
        if (touchStartY - touchEndY > 100 && touchEndY !== 0) {
            close_menu();
        }
    }
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
        <section className={"twitterContainer"}
            onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)} 
            onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)} 
            onTouchEnd={(e) => handleTouchEnd(e)}
            >
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
                <div className="menu-item" onClick={(e) => {redirect('blogs');}}>
                    <BlogIcon className="blog"/>
                    <div className="about">Blog</div>
                </div>
                <div className="menu-item" onClick={() => {redirect('books')}}>
                    <BooksIcon className="books"/>
                    <div className="about">Books</div>
                </div>
            </div>
            <div className="twitter-embed">
                {props.isMobile && 
                    <div className="swipe-up" onClick={(e) => {close_menu(e)}}>
                        <img className='swipey' alt='swipe up' src={ SwipeUp } />
                    </div>
                }
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