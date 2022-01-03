import React from 'react';

import './NotFound.scss';

function NotFound() {
    return (
        <div className="container">
            <div className="text-header">
                <div className="text-center">404</div>
            </div>
            
            <div className="content-box">
                <div className="content-box-header">
                    Looks like some wires got crossed.
                </div>
                <div className>The page you are looking for is unavailable!</div>
                <a href='/' class="content-link">Go Home</a>
            </div>
        </div>
    )
}

export default NotFound;