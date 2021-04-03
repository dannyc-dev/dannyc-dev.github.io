import React from 'react';

function Preview(props) {
    return (
        <div className="preview-container">
            <div className="preview-title">{props.title}</div>
            <div className="preview-body">
                {props.desc}
            </div>
        </div>
    )
}

export default Preview;