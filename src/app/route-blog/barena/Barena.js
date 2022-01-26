import React, {useState, useEffect} from 'react';
import GoBack from '../../core/goback/GoBack';
import { CSSTransition } from 'react-transition-group';
import HeaderImage from '../../../assets/staticoffsetheader.svg';
import PreviewGif from './assets/preview_full.gif';
import { ImageInfo } from '../../core/imageinfo/ImageInfo';

import './Barena.scss';

function Barena(props) {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className="blog-body">
            <GoBack />
            <CSSTransition
                    in={animate}
                    timeout={300}
                    classNames="slide"
                    unmountOnExit
            >
            <div className="blog-header-container">
                <img className='blog-header' alt='blog header' src={HeaderImage} />
                {!props.isMobile && 
                    <ImageInfo info={'My girlfriend made this when I explained what I was working on. An abstract representation of what memory segments could look like, pretty neat I thought.'}/>
                }
            </div>
            </CSSTransition>
            <div className="audio-container">
                <audio controls>
                    <source src="https://dannyc-assets.s3.amazonaws.com/Karsten_Obarski_Jack_Dance.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <span className="audio-footer"><a className="footer-text" target="_blank" rel="noreferrer" href='http://amp.dascene.net/detail.php?detail=modules&view=3982'>Karsten Obarski - Jack Dance</a><span className="bullet-sm">&bull;</span><a className="footer-text" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=E4zM3xbwCJg">Youtube Link</a></span>
            </div>
            <CSSTransition
                    in={animate}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
            >
            <div className="blog-title">
            RPM +/- WPM
            </div>
            </CSSTransition>
            <div className="blog-p">
            Diving into the foundations of reading and writing to process memory externally. To do this, I set up two applications. A main game application and an external trainer. For those not familiar with <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Trainer_(games)#:~:text=Game%20trainers%20are%20programs%20made,in%20order%20to%20allow%20cheating.">game trainers</a>, the term originated sometime in the 80's and can be loosely defined as a program that is able to modify a different program's memory in order to enable new features or functionality. Below you'll see an example of the two programs running side by side. On the left the external trainer, showing process details, a menu of possible options, and an example of changing the player stats. On the right side our game is running, showing the main menu of our game lobby and then showing updated player values after we've modified them in our trainer.
            </div>
            <div className="blog-image-container">
                <img className="blog-image-l" alt="preview" src={PreviewGif}/>
            </div>
            <div className="blog-sub-header">The Tech Stuff</div>
            <div className="blog-p">
                <div className="blog-center" >
                    Github Links to repos:&nbsp;
                    (Left)&nbsp; 
                    <a target="_blank" rel="noreferrer" href="https://github.com/dannyc-dev/Battle-Arena-Trainer">
                        Battle Arena Trainer
                    </a>,&nbsp; (Right) &nbsp;
                    <a target="_blank" rel="noreferrer" href="https://github.com/dannyc-dev/Battle-Arena-In-Memory">
                        Battle Arena Game
                    </a>
                </div>
                These projects were built in Visual Studio 2022 on Windows 11 v10.0.22000 (sorry Mac fans, Windows only for this one). To download and compile from source, open the solution file of each project in visual studio, target your release, and build the project or head over to the github release pages and download the binaries directly - <a target="_blank" rel="noreferrer" href="https://github.com/dannyc-dev/Battle-Arena-In-Memory/releases/">Battle Arena Game Releases</a>, and <a target="_blank" rel="noreferrer" href="https://github.com/dannyc-dev/Battle-Arena-Trainer/releases/">Battle Arena Trainer Releases</a>.

                <b> Note:</b> Downloading and running the binaries directly will give you scary warnings about downloading and running untrusted and unsigned code off the internet. And I honestly agree with them, but the option is available.

                Below I've added tooling specific information for the various tools I use throughout the post. Keep in mind that some of the tooling is flexible. In my opinion, using the tool you know the best is more important than using the best tool.
            </div>
            <div className='blog-p'>
                <div className="blog-list-container" >
                <div className="blog-list-header">Tooling Specs:</div>
                    <ul className="blog-list">
                        <li>Visual Studio 2022</li>
                        <li>IDA Home</li>
                        <li>Cheat Engine</li>
                    </ul>
                </div>
            </div>
            <div className='blog-sub-header'>The Fun Stuff</div>
            <div className='blog-p'>
                Text
            </div>
        </div>
    )
}
export default Barena;