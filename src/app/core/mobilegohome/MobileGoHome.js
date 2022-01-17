import React, { useState, useEffect } from 'react';
import HomeLogo from "../../../assets/gohome.svg";
import { useLocation, useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import './MobileGoHome.scss';

function MobileGoHome(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    
    const redirect = (route) => { 
        if (location.pathname !== route) {
            navigate(route);
        } else {
            props.closeMenu(props.menu);
        }
    }
    return (
        <div className='mobile-home-container'>
            <CSSTransition
                in={animate}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
            <img className='home-logo' alt='Back' src={HomeLogo} onClick={(e) => {redirect('/');}}/>
            </CSSTransition>
        </div>
    )
}   

export default MobileGoHome;