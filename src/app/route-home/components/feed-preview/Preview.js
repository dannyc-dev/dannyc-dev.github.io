import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import './Preview.scss';

function Preview(props) {
    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 480px)'
    })
    return (
        <div className="preview-container">
            {isMobileDevice && <>
                <div className="preview-container-top">
                    Mobile Top
                </div>
                <div className="preview-container-bot">
                    Mobile Bottom
                </div>
            </>}
            {!isMobileDevice && <>
                <div className="preview-container-left">
                    <div className="preview-title">{props.title}</div>
                    <div className="preview-body">
                        {props.desc}
                    </div>
                    <div className="preview-link">
                    <Link to="/rustpy">
                        <p>Read More</p>
                    </Link>
                    </div>
                </div>
                <div className="preview-container-right">
                    <img alt="Not Found" src={require(`./../../../../assets/${props.img_src}`).default} />
                </div>
            </>}
        </div>
    )
}

export default Preview;