import React from 'react';
import BlogPreview from '../blog-preview/BlogPreview.js';
import {PREVIEW_FEED} from '../../../Metadata';
import './BlogFeed.scss';
import GoHome from '../../core/gohome/GoHome.js';

function BlogFeed(props) {
    // API Call
    const feed = () => {
        return PREVIEW_FEED.map((article, index) => {
            if (index !== PREVIEW_FEED.length - 1) {
                if (!article.exlcude) {
                    return (
                        <React.Fragment key={index}>
                            <BlogPreview 
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
                        <BlogPreview 
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
        <div className='blog-container'>
            <GoHome />
            {feed()}
        </div>
    )
}

export default BlogFeed;