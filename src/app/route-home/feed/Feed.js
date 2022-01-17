import React from 'react';
import Preview from '../feed-preview/Preview';
import {PREVIEW_FEED} from '../../../Metadata';
import './Feed.scss';

function Feed(props) {
    // API Call
    const feed = () => {
        return PREVIEW_FEED.map((article, index) => {
            if (index !== PREVIEW_FEED.length - 1) {
                if (!article.exlcude) { 
                    return (
                        <React.Fragment key={index}>
                            <Preview 
                                title={article.title} 
                                desc={article.desc} 
                                img_src={article.img_src}
                                link={article.link} 
                                subtitle={article.subtitle}
                                img_info={article.img_info}
                            />
                            <div className="divider"></div>
                        </React.Fragment>
                    )
                }
            } else {
                if (!article.exlcude) { 
                    return (
                        <Preview 
                            title={article.title} 
                            desc={article.desc} 
                            img_src={article.img_src} 
                            key={index} 
                            link={article.link} 
                            subtitle={article.subtitle}
                            img_info={article.img_info}
                        />
                    )
                }
            }
            return null;
        })
    }
    
    return (
        <div className='feed-container'>
            {feed()}
        </div>
    )
}

export default Feed;