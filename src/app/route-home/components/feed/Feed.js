import React from 'react';
import Preview from '../feed-preview/Preview';
import {PREVIEW_FEED} from './Metadata';
import './Feed.scss';

function Feed() {
    // API Call
    const feed = () => {
        return PREVIEW_FEED.map((article, index) => {
            return (
                <Preview title={article.title} desc={article.desc} img_src={article.img_src} key={index}/>
            )
        })
    }
    return (
        <div className='feed-container'>
            {feed()}
        </div>
    )
}

export default Feed;