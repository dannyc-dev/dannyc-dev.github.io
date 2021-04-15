import React from 'react'; 
import { ReactComponent as TwitterIcon} from '../../../assets/twitter.svg';
import { ReactComponent as GithubIcon} from '../../../assets/github.svg';
import { ReactComponent as LinkedinIcon} from '../../../assets/linkedin.svg';
import { ReactComponent as TwitchIcon} from '../../../assets/twitch.svg';
import { ReactComponent as MenuIcon} from '../../../assets/burger.svg';
import "./Socials.scss";

function Socials(props) {
    function handleChange(event) {
        props.onChange(props.toggle);
    }
    return (
        <div className="socials-container">
            <ul>
                <li>
                    <div className="menu-anchor" onClick={handleChange}>{<MenuIcon className="menu"/>}</div>
                </li>
                <li>
                    <a href="https://twitter.com/dannyc_dev" target="_blank" rel="noreferrer">{<TwitterIcon className="icon twitter"/>}</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/danny-colmenares/" target="_blank" rel="noreferrer">{<LinkedinIcon className="icon linkedin"/>}</a>
                </li>
                <li>
                    <a href="https://github.com/danny-devv" target="_blank" rel="noreferrer">{<GithubIcon className="icon"/>}</a>
                </li>
                <li>
                    <a href="https://www.twitch.tv/dev_danny_" target="_blank" rel="noreferrer">{<TwitchIcon className="icon twitch"/>}</a>
                </li>
            </ul>
        </div>
    )
}

export default Socials;