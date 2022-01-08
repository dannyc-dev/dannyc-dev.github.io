import React, {useState, useEffect} from 'react';
import GoHome from '../../core/gohome/GoHome';
import { CSSTransition } from 'react-transition-group';
import HeaderImage from '../../../assets/staticoffsetheader.svg';
import PreviewGif from './assets/preview_full.gif';

import './Barena.scss';

function Barena(props) {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className="blog-body">
            <GoHome />
            <CSSTransition
                    in={animate}
                    timeout={300}
                    classNames="slide"
                    unmountOnExit
            >
            <div className="blog-header-container">
                <img className='blog-header' alt='blog header' src={HeaderImage} />
            </div>
            </CSSTransition>
            <CSSTransition
                    in={animate}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
            >
            <div className="blog-title">
            Battle Arena - Static Offsets Edition
            </div>
            </CSSTransition>
            <div className="blog-p">
                Test
            </div>
            <div className="blog-image-container">
                <img className="blog-image" src={PreviewGif}/>
            </div>
        </div>
    )
}
export default Barena;