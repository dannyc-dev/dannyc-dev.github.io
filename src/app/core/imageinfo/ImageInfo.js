import React from 'react';
import Info from '../../../assets/info.svg';
import './Imageinfo.scss';

function ImageInfo(props) {
    return (
        <div className="image-info-container">
            <img className='image-info' alt="info" src={Info} />
            <span className='tooltip'>{props.info}</span>
        </div>
    );
}

export default ImageInfo;