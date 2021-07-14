import React from 'react';
import Preview from '../feed-preview/Preview';
import {PREVIEW_FEED} from './Metadata';
import './Feed.scss';

function Feed(props) {
    // API Call
    const feed = () => {
        return PREVIEW_FEED.map((article, index) => {
            if (index !== PREVIEW_FEED.length - 1) {
                return (
                    <React.Fragment key={index}>
                        <Preview title={article.title} desc={article.desc} img_src={article.img_src} link={article.link} sub_title={article.sub_title}/>
                        <div className="divider"></div>
                    </React.Fragment>
                )
            } else {
                return (
                    <Preview title={article.title} desc={article.desc} img_src={article.img_src} key={index} link={article.link} sub_title={article.sub_title}/>
                )
            }
            
        })
    }
    
    return (
        <div className={'feed-container'}>
            {feed()}
        </div>
    )
}

export default Feed;