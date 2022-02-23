import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import GoBack from '../../core/goback/GoBack';
import { ImageInfo } from '../../core/imageinfo/ImageInfo';
import './NineLives.scss';

function NineLives(props) {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className="blog-body">
            <GoBack />
            <div className="blog-header-container">
                <img className='game-header' alt='blog header' src={"https://dannyc-assets.s3.amazonaws.com/ninelives/nine_lives_banner.png"} />
                {/* {!props.isMobile && 
                    <ImageInfo className="nine-lives-info" info={'Credit: my girlfriend'}/>
                } */}
            </div>
            <CSSTransition
                    in={animate}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
            >
            <div className="blog-title">
            Game Jam - Nine Lives
            </div>
            </CSSTransition>
            <div className="blog-header-container">
                {/* <img className='game-header' alt='blog header' src={""} /> */}
            </div>
            <div className='blog-p'>
                Nine Lives started out as an idea between me and my girlfriend (and our cat 🐱). It's an early prototype of a game where you play as, you guessed it, a cat! Well, you can pick between a few different cats and then start your journey through the streets of the neon city (really just one street bc level design is hard!!). Explore at your own pace and make your way through the various shops and restaurants in your journey to the other side of the alley. And be sure you stop and enjoy some of the tasty treats along the way.
                <div className="blog-list-container" >
                    <div className="blog-list-header">
                        Gameplay: 
                    </div>
                </div>
            </div>
            

        </div>
    );
}

export default NineLives;