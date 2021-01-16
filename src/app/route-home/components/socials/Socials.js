import React from 'react'; 
import { ReactComponent as TwitterIcon} from '../../../../assets/twitter.svg';
import { ReactComponent as GithubIcon} from '../../../../assets/github.svg';
import { ReactComponent as LinkedinIcon} from '../../../../assets/linkedin.svg';
import { ReactComponent as TwitchIcon} from '../../../../assets/twitch.svg';
import "./Socials.scss";

function Socials() {
    return (
        <div className="socials-container">
            <ul>
                <li>
                    <a href="https://twitter.com/dev_danny_">{<TwitterIcon className="icon twitter"/>}</a>
                </li>
                <li>
                    <a href="#">{<LinkedinIcon className="icon linkedin"/>}</a>
                </li>
                <li>
                    <a href="https://github.com/Danny-devv">{<GithubIcon className="icon"/>}</a>
                </li>
                <li>
                    <a href="https://www.twitch.tv/dev_danny_">{<TwitchIcon className="icon twitch"/>}</a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;