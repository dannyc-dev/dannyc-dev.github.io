import React from 'react';
import Construction from '../../core/construction/Construction';
import GoBack from '../../core/goback/GoBack';
import './Pong.scss';

function Pong(props) {
    return (
        <div className="blog-body">
            <GoBack />
            <Construction />
        </div>
    );
}

export default Pong;