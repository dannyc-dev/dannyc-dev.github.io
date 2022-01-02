import React from 'react';
import Construction from '../../core/construction/Construction';
import GoHome from '../../core/gohome/GoHome';
import '../Blog.scss';

function StackSmash(props) {
    return (
        <div className="blog-body">
            <GoHome />
            <Construction />
        </div>
    );
}

export default StackSmash;