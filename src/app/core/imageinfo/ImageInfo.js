import React from 'react';
import Info from '../../../assets/info.svg';
import './Imageinfo.scss';

export function ImageInfo(props) {
    return (
        <div className="image-info-container">
            <img className='image-info' alt="info" src={Info} />
            <span className='tooltip'>{props.info}</span>
        </div>
    );
}

export function ImageInfoSmall(props) {
    return (
        <div className="image-info-container-small">
            <img className='image-info-small' alt="info" src={Info} />
            <span className='tooltip-small'>{props.info}</span>
        </div>
    );
}
