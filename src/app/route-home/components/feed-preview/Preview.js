import React from 'react';
import { Link, Text } from 'react-router-dom';
import './Preview.scss';

function Preview(props) {
    console.log(props);
    return (
        <div className="preview-container">
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
                <img src={require(`./../../../../assets/${props.img_src}`).default} />
            </div>
        </div>
    )
}

export default Preview;