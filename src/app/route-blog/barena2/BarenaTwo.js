import React from 'react';
import Construction from '../../core/construction/Construction';
import GoBack from '../../core/goback/GoBack';
import './BarenaTwo.scss';

function BarenaTwo(props) {
    return (
        <div className="blog-body">
            <GoBack />
            <Construction />
        </div>
    );
}

export default BarenaTwo;