import React, { useEffect } from 'react';
import './TwitterFeed.scss';

function TwitterFeed() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return (
        <section className="twitterContainer">
            <div className="menu-container">
                <div className="about">
                    about
                </div>
                <div className="contact">
                    contact
                </div>
            </div>
            <div className="twitter-embed">
                <a
                    className="twitter-timeline"
                    data-tweet-limit="4"
                    data-chrome="noheader nofooter noborders noscrollbar"
                    href="https://twitter.com/dannyc_dev"
                >
                </a>
            </div>
        </section>
    )
}

export default TwitterFeed;