import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as InfoIcon } from '../../../assets/superhero.svg';
import { ReactComponent as BlogIcon } from '../../../assets/content.svg';
import { ReactComponent as ContactIcon } from '../../../assets/plane.svg';
import './TwitterFeed.scss';

function TwitterFeed(props) {
    let history = useHistory();
    const [showHome, setShowHome] = useState(false);
    useEffect(() => {
        // Twitter Feed Load
        // const script = document.createElement("script");
        // script.src = "https://platform.twitter.com/widgets.js";
        // document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    const redirect = (route) => {
        history.push(route);
    }

    return (
        <section className={"twitterContainer"}>
            <div className="menu-container">
                <div className="menu-item" onClick={() => {redirect('about')}}>
                    <InfoIcon className="info"/>
                    <div className="about">About</div>
                </div>
                <div className="menu-item">
                    <BlogIcon className="blog"/>
                    <div className="about">Blog</div>
                </div>
                <div className="menu-item">
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