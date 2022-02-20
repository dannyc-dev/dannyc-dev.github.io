import React from 'react';
import Construction from '../../core/construction/Construction';
import GoBack from '../../core/goback/GoBack';
import './AlleyCat.scss';

function AlleyCat(props) {
    return (
        <div className="blog-body">
            <GoBack />
            <Construction />
        </div>
    );
}

export default AlleyCat;