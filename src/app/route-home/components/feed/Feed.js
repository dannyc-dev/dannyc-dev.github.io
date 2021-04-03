import React from 'react';
import Preview from '../feed-preview/Preview';
import {PREVIEW_FEED} from './Metadata';
import './Feed.scss';

function Feed() {
    // API Call
    const feed = () => {
        console.log(PREVIEW_FEED);
        for (let blog in PREVIEW_FEED) {
            let desc = PREVIEW_FEED[blog];
            return (
                <Preview title={blog} desc={desc}/>
            );
        }
    }
    return (
        <div className='feed-container'>
            {feed()}
        </div>
    )
}

export default Feed;