import React from 'react';
import BookPreview from '../book-preview/BookPreview';
import {BOOK_FEED} from '../../../BookMetadata';
import GoBack from '../../core/goback/GoBack';
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
                            desc_1={article.desc_1}
                            desc_2={article.desc_2} 
                            desc_3={article.desc_3} 
                            img_src={article.img_src}
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
                        desc_1={article.desc_1}
                        desc_2={article.desc_2} 
                        desc_3={article.desc_3} 
                        img_src={article.img_src} 
                        key={index} 
                        subtitle={article.subtitle}
                        img_info={article.img_info}
                    />
                )
            }
            
        })
    }
    
    return (
        <div className={'book-container'}>
            <GoBack />
            <div className="book-intro-container">
                <div className="book-intro-title">What are you reading?</div>
                <div className="book-intro-body">You'll be seeing a lot of comic books, tech books/white papers, and non-fictions but you never really know what we'll get into. Sometimes you let the bookstore decide ¯\_(ツ)_/¯</div>
            </div>
            {feed()}
        </div>
    )
}

export default BookFeed;