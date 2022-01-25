import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import './Preview.scss';
import { ImageInfoSmall } from '../../core/imageinfo/ImageInfo';

function Preview(props) {
    let navigate = useNavigate();
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
                    <img alt="Not Found" src={props.img_src} onClick={(e) => {navigate(`/blogs/${props.link}`)}}/>
                </div>
                <div className="preview-container-bot">
                    <div className="preview-title" onClick={(e) => {navigate(`/blogs/${props.link}`)}}>{props.title}</div>
                    <div className="preview-body">
                        {props.desc}
                    </div>
                    <div className="preview-link">
                        <p className="link-text" onClick={(e)=> {navigate(`/blogs/${props.link}`)}}>Read More</p>
                    </div>
                </div>
            </>}
            {!isMobileDevice && <>
                <div className="preview-container-left">
                    <div className="preview-title" onClick={(e) => {navigate(`/blogs/${props.link}`)}}>{props.title}</div>
                    <div className="preview-subtitle">{props.subtitle}</div>
                    <div className="preview-body">
                        {props.desc}
                    </div>
                    <div className="preview-link">
                        <p className="blog-link-text" onClick={(e)=> {navigate(`/blogs/${props.link}`)}}>Read More</p>
                    </div>
                </div>
                <div className="preview-container-right">
                    <img alt="Not Found" src={props.img_src} onClick={(e) => {navigate(`/blogs/${props.link}`)}}/>
                    {props.img_info &&
                        <ImageInfoSmall info={props.img_info} />
                    }
                </div>
            </>}
        </div>
        </CSSTransition>
    )
}

export default Preview;