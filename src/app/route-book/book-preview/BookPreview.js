import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import './BookPreview.scss';
import { ImageInfoSmall } from '../../core/imageinfo/ImageInfo';

function BookPreview(props) {
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
        <div className="book-preview-container">
            {isMobileDevice && <>
                <div className="book-preview-container-top">
                    <img alt="Not Found" src={`${props.img_src}`} onClick={(e) => {}}/>
                </div>
                <div className="book-preview-container-bot">
                    <div className="book-preview-title" onClick={(e) => {}}>{props.title}</div>
                    <div className="book-preview-subtitle">{props.subtitle}</div>
                    <div className="book-preview-body">{props.desc_1}</div>
                    <div className="book-preview-body">{props.desc_2}</div>
                    <div className="book-preview-body">{props.desc_3}</div>
                    {/* <div className="preview-link">
                        <Link to={{pathname: `/${props.link}`}}> <p>Read More</p> </Link>
                    </div> */}
                </div>
            </>}
            {!isMobileDevice && <>
                <div className="book-preview-container-left">
                    <img alt="Not Found" src={`${props.img_src}`} onClick={(e) => {navigate(props.link);}}/>
                        {props.img_info &&
                            <ImageInfoSmall info={props.img_info} />
                        }
                </div>
                <div className="book-preview-container-right">
                    <div className="book-preview-title" onClick={(e) => {navigate(props.link);}}>{props.title}</div>
                    <div className="book-preview-subtitle">{props.subtitle}</div>
                    <div className="book-preview-body">{props.desc_1}</div>
                    <div className="book-preview-body">{props.desc_2}</div>
                    <div className="book-preview-body">{props.desc_3}</div>
                    {/* <div className="preview-link">
                    <Link to={{pathname: `/${props.link}`}}> <p>Read More</p> </Link>
                    </div> */}
                </div>
            </>}
        </div>
        </CSSTransition>
    )
}

export default BookPreview;