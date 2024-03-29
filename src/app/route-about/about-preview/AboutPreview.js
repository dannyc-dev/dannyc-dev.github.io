import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import profileImage from '../../../assets/aboutme.jpg';

import './AboutPreview.scss';

function AboutPreview(props) {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className="about-preview">
            <CSSTransition
                in={animate}
                timeout={300}
                classNames="image-preview"
                unmountOnExit
            >
            <img className="profile" alt="Profile" src={profileImage}></img>
            </CSSTransition>
            <CSSTransition
                in={animate}
                classNames="fade"
                timeout={300}
                unmountOnExit>
                <div className="about-me">
                    <div className="header">About Me:</div>
                    <div>Software Engineer @ Rapid7. Building out the next generation of cloud security products.</div>
                    <div>Previously building things @ Capital One.</div>
                    <div>Virginia Tech grad. ~Go Hokies~</div>
                    <div className="header">Contact:</div>
                    <div>For business inquiries, please reach me at: </div>
                    <div>dannyc.dev@gmail.com</div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default AboutPreview;