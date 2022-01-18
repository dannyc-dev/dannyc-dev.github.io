import React, { useState, useEffect } from 'react';
import HomeLogo from "../../../assets/gohome.svg";
import { useNavigate, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import './GoBack.scss';

function GoBack(props) {
    const navigate = useNavigate();
    const { key: keyLocation } = useLocation();
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])

    const handleGoBack = () => {
        const isInitialLocation = keyLocation === 'default';
        const to = isInitialLocation ? '/' : -1;
        navigate(to);
      };
    
    return (
        <div className='home-container'>
            <CSSTransition
                in={animate}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
            <img className='home-logo' alt='Back' src={HomeLogo} onClick={(e) => {handleGoBack()}}/>
            </CSSTransition>
        </div>
    )
}   

export default GoBack;