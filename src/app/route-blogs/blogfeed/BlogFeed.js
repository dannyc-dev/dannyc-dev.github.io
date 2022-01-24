import React from 'react';
import BlogPreview from '../blog-preview/BlogPreview.js';
import {PREVIEW_FEED} from '../../../Metadata';
import './BlogFeed.scss';
import GoBack from '../../core/goback/GoBack.js';

function BlogFeed(props) {
    // API Call
    const feed = () => {
        return PREVIEW_FEED.map((article, index) => {
            if (index !== PREVIEW_FEED.length - 1) {
                return (
                    <React.Fragment key={index}>
                        <BlogPreview 
                            title={article.title} 
                            desc={article.desc}
                            img_src={article.img_src}
                            link={article.link} 
                            subtitle={article.subtitle}
                            img_info={article.img_info}
                            first_index={`${index === 0 ? "first" : null}`}
                            />
                        <div className="blogs-divider"></div>
                    </React.Fragment>
                )
            } else {
                return (
                    <BlogPreview 
                        title={article.title} 
                        desc={article.desc} 
                        img_src={article.img_src} 
                        key={index} 
                        link={article.link} 
                        subtitle={article.subtitle}
                        img_info={article.img_info}
                        first_index={`${index === 0 ? "first" : null}`}
                    />
                )
            }
        })
    }
    
    return (
        <div className='blog-container'>
            <GoBack />
            {feed()}
        </div>
    )
}

export default BlogFeed;