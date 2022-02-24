import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import GoBack from '../../core/goback/GoBack';
import ReactPlayer from 'react-player'
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
            <div className='blog-p'>
                Nine Lives started out as an idea between me and my girlfriend (and our cat 🐱). It's an early prototype of a game where you play as, you guessed it, a cat! You can pick between a few different cats and then start your adventure through the streets of the neon city. It's really just one street for this prototype because level design is hard but maybe I'll add to it. Explore at your own pace and make your way through the various shops and restaurants in your journey to the other side of the alley. And be sure to stop and enjoy some of the tasty treats along the way.
                <div className="blog-list-container" >
                    <div className="blog-list-header">
                        Choosing a character: 
                    </div>
                </div>
                If you know me personally, you might recognize some of the star studded cast you can play as in game - they were all inspired (some better than others) by some of the wonderful animals in my life. Let's meet them!
                <div className="cast-header">Default character</div>
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/ninelives/default_cat_preview.gif"}/>
                </div>
                <div className="cast-header">Morty</div>
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/ninelives/morty_preview.gif"}/>
                </div>
                <div className="cast-header">Mac</div>
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/ninelives/mac_preview.gif"}/>
                </div>
                <div className="cast-header">Tuc</div>
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/ninelives/tuc_preview.gif"}/>
                </div>
                <div className="cast-header">Cleo</div>
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/ninelives/cleo_preview.gif"}/>
                </div>
            </div>
            <div className="blog-sub-header">Creating life with a state machine?</div>
            <div className="blog-p">
                My characters state machine only holds a few different states (Idle, Running, Jumping, Sitting) but that was good enough for the kind of experience I was going for. Below you can see an example of the animation blending between the running and idle state which you'll experience in game by pressing the shift key while moving forward (W key) - that will increase the velocity of your character and trigger the change in state.
                <div className="blog-image-container">
                    <ReactPlayer className="blog-image-l" controls="true" height="100%" width="100%" url="https://dannyc-assets.s3.amazonaws.com/ninelives/running.mp4"/>
                </div>
                Similarly below you can find a preview of the sitting state which can be triggered by pressing the C key on your keyboard in game (don't worry about remembering the keys, I'll have a key map at the bottom for all the keys supported in game).
                <div className="blog-image-container">
                    <ReactPlayer className="blog-image-l" controls="true" height="100%" width="100%" url="https://dannyc-assets.s3.amazonaws.com/ninelives/sitting.mp4"/>
                </div>
                Let's dive into some gameplay!

            </div>

        </div>
    );
}

export default NineLives;