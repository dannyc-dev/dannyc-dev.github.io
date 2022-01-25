import React from 'react';
import Construction from '../../core/construction/Construction';
import GoBack from '../../core/goback/GoBack';
import './D3D.scss';

function D3D(props) {
    return (
        <div className="blog-body">
            <GoBack />
            <Construction />
        </div>
    );
}

export default D3D;