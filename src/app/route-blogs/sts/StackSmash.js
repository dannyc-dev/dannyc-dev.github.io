import React from 'react';
// import Construction from '../../core/construction/Construction';
import HeaderImage from '../../../assets/staticoffsetheader.svg';
import GoHome from '../../core/gohome/GoHome';
import '../Blog.scss';

function StackSmash(props) {
    return (
        <div className="blog-body">
            <GoHome />
            <div className="blog-header-container">
                <img className='blog-header' alt='blog header' src={HeaderImage} />
            </div>
            {/* <Construction /> */}
        </div>
    );
}

export default StackSmash;