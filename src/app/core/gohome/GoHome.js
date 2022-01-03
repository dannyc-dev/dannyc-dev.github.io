import React, { useState, useEffect } from 'react';
import HomeLogo from "../../../assets/gohome.svg";
import { useLocation, useHistory } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import './GoHome.scss';

function GoHome(props) {
    const location = useLocation();
    const history = useHistory();
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    
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
        <div className='home-container'>
            <CSSTransition
                in={animate}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
            <img className='home-logo' alt='Back' src={HomeLogo} onClick={(e) => {redirect('home');}}/>
            </CSSTransition>
        </div>
    )
}   

export default GoHome;