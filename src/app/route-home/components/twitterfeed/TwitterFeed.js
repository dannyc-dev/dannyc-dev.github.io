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
            <div className="twitter-embed">
                <a
                    className="twitter-timeline"
                    // data-theme="dark"
                    data-tweet-limit="8"
                    data-chrome="noheader nofooter noborders noscrollbar"
                    href="https://twitter.com/danny_devv"
                >
                Tweets by danny_devv
                </a>
            </div>
        </section>
    )
}

export default TwitterFeed;