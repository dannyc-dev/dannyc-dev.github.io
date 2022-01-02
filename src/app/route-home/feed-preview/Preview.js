import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import './Preview.scss';

function Preview(props) {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 480px)'
    })
    return (
        <CSSTransition
            in={animate}
            timeout={300}
            classNames="fade"
            unmountOnExit
        >
        <div className="preview-container">
            {isMobileDevice && <>
                <div className="preview-container-top">
                    <img alt="Not Found" src={require(`./assets/${props.img_src}`)} />
                </div>
                <div className="preview-container-bot">
                    <div className="preview-title">{props.title}</div>
                    <div className="preview-body">
                        {props.desc}
                    </div>
                    <div className="preview-link">
                        <Link to={{pathname: `/${props.link}`}}> <p>Read More</p> </Link>
                    </div>
                </div>
            </>}
            {!isMobileDevice && <>
                <div className="preview-container-left">
                    <div className="preview-title">{props.title}</div>
                    <div className="preview-subtitle">{props.subtitle}</div>
                    <div className="preview-body">
                        {props.desc}
                    </div>
                    <div className="preview-link">
                    <Link to={{pathname: `/${props.link}`}}> <p>Read More</p> </Link>
                    </div>
                </div>
                <div className="preview-container-right">
                    <img alt="Not Found" src={require(`./assets/${props.img_src}`)} />
                </div>
            </>}
        </div>
        </CSSTransition>
    )
}

export default Preview;