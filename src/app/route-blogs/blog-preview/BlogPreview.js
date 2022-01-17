import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import { ImageInfoSmall } from '../../core/imageinfo/ImageInfo';

import './BlogPreview.scss';

function BlogPreview(props) {
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
        <div className="blog-preview-container">
            {isMobileDevice && <>
                <div className="blog-preview-container-top">
                    <img alt="Not Found" src={require(`./assets/${props.img_src}`)} onClick={(e) => {navigate(props.link);}}/>
                </div>
                <div className="blog-preview-container-bot">
                    <div className="blog-preview-title" onClick={(e) => {navigate(props.link);}}>{props.title}</div>
                    <div className="blog-preview-body">
                        {props.desc}
                    </div>
                    <div className="blog-preview-link">
                        <Link to={{pathname: `/${props.link}`}}> <p>Read More</p> </Link>
                    </div>
                </div>
            </>}
            {!isMobileDevice && <>
                <div className="blog-preview-container-left">
                    <div className="blog-preview-title" onClick={(e) => {navigate(props.link);}}>{props.title}</div>
                    <div className="blog-preview-subtitle">{props.subtitle}</div>
                    <div className="blog-preview-body">
                        {props.desc}
                    </div>
                    <div className="blog-preview-link">
                    <Link to={{pathname: `/${props.link}`}}> <p>Read More</p> </Link>
                    </div>
                </div>
                <div className="blog-preview-container-right">
                    <img alt="Not Found" src={require(`./assets/${props.img_src}`)} onClick={(e) => {navigate(props.link);}}/>
                    {props.img_info &&
                        <ImageInfoSmall info={props.img_info} />
                    }
                </div>
            </>}
        </div>
        </CSSTransition>
    )
}

export default BlogPreview;