import React from 'react';
import BookPreview from '../book-preview/BookPreview';
import {BOOK_FEED} from '../../../BookMetadata';
import GoHome from '../../core/gohome/GoHome';
import './BookFeed.scss';

function BookFeed(props) {
    // API Call
    const feed = () => {
        return BOOK_FEED.map((article, index) => {
            if (index !== BOOK_FEED.length - 1) {
                return (
                    <React.Fragment key={index}>
                        <BookPreview 
                            title={article.title} 
                            desc={article.desc} 
                            img_src={article.img_src}
                            rank={article.rank} 
                            subtitle={article.subtitle}
                            img_info={article.img_info}
                         />
                        <div className="divider"></div>
                    </React.Fragment>
                )
            } else {
                return (
                    <BookPreview 
                        title={article.title} 
                        desc={article.desc} 
                        img_src={article.img_src} 
                        key={index} 
                        rank={article.rank} 
                        subtitle={article.subtitle}
                        img_info={article.img_info}
                    />
                )
            }
            
        })
    }
    
    return (
        <div className={'book-container'}>
            <GoHome />
            <div className="book-intro-container">
                <div className="book-intro-title">My Bookshelf</div>
                <div className="book-intro-body">Keeping track of interesting reads throughout the year. I mainly read comic books, tech books, and non-fiction but I've been known to dabble around.</div>
            </div>
            {feed()}
        </div>
    )
}

export default BookFeed;