import React, { useState, useEffect } from 'react';
import HomeLogo from "../../../assets/gohome.svg";
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import './GoBack.scss';

function GoBack(props) {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    
    return (
        <div className='home-container'>
            <CSSTransition
                in={animate}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
            <img className='home-logo' alt='Back' src={HomeLogo} onClick={(e) => {navigate(-1)}}/>
            </CSSTransition>
        </div>
    )
}   

export default GoBack;