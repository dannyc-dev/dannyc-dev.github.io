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
            I dove into the foundations of reading and writing externally to process memory by creating two prototypes. A main game application and an external trainer. For those not familiar with <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Trainer_(games)#:~:text=Game%20trainers%20are%20programs%20made,in%20order%20to%20allow%20cheating.">game trainers</a>, the term originated sometime in the 80's and can be loosely defined as a program that is able to modify a different program's memory in order to enable new features or functionality. Below you'll see an example of the two programs running side by side. On the left the external trainer, showing process details, a menu of possible options, and an example of changing the player stats. On the right side our game is running, showing the main menu of our game lobby and then showing updated player values after we've modified them in our trainer.
            </div>
            <div className="blog-image-container">
                <img className="blog-image-l" alt="preview" src={PreviewGif}/>
            </div>
            <div className="blog-sub-header">The Tech Details</div>
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
                These projects were built in Visual Studio 2022 on Windows 11 v10.0.22000 (sorry Mac fans, Windows only for this one). To download and compile from source, open the solution file of each project in visual studio, target your release, and build the project. Alternatively, you can head over to the github release pages for each project and download the precompiled binaries - <a target="_blank" rel="noreferrer" href="https://github.com/dannyc-dev/Battle-Arena-In-Memory/releases/">Battle Arena Game Releases</a>, and <a target="_blank" rel="noreferrer" href="https://github.com/dannyc-dev/Battle-Arena-Trainer/releases/">Battle Arena Trainer Releases</a>.

                <b> Note:</b> Downloading and running the binaries directly will give you scary warnings about downloading and running untrusted and unsigned code off the internet. And I honestly agree with them, but the option is available.

                Below I've added tooling specific information for the various tools I use throughout the post. Keep in mind that some of the tooling is flexible. In my opinion, using the tool you know the best is more important than using the best tool.
            </div>
            <div className='blog-p'>
                <div className="blog-list-container" >
                <div className="blog-list-header">Tooling Specs:</div>
                    <ul className="blog-list">
                        <li>Visual Studio 2022 (aside from some project properties, it probably doesn't really matter which version you have)</li>
                        <li>IDA Home (free version should also work)</li>
                        <li>Cheat Engine (optional but it's just a good tool to be familiar with, especially for these low stake projects)</li>
                    </ul>
                </div>
            </div>
            <div className='blog-sub-header'>Battle Arena - Game Design</div>
            <div className="blog-image-container">
                <img className="blog-image-l" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/d3d-sim/design.jpeg"}/>
            </div>
            <div className='blog-p'>
                I tried to design the simplest game I could while still giving the player some control over key game loop inputs. Each turn the player is faced with a decision to try to attack the opponent or try to heal themselves. The enemy player will mirror whatever you decide (cutting edge AI), so choose wisely. Simple enough, but it gives us just enough control to make altering the game state a little interesting. One of the key designs about this game is that both player and enemy objects are static global pointers. This means that they get assigned a static address, relative to an offset every time the module loads up. So if we find the program's base address and the player object's relative offset, we can reliably write to it's memory address and alter the player and enemy stats during the game.
            </div>
            <div className='blog-sub-header'>Finding the player offsets</div>
            <div className='blog-p'>
                The first thing I did was open the game file (found in the default build path <code> x64/Debug/battle_arena.exe</code> after you build the project) in IDA. The simple design of the game makes the reverse engineering process much simpler. In the main function, we see a call for loading the effective address of the player (and enemy) that IDA resolves for us. The snippets of interesting disassembly bits can be found below as well as the disassembly from IDA which has the full context:
                <div className="code-editor">
                    <div className="tabs">
                    <div className="title -blue"><i className="icon"></i>main - disassembly</div>
                    </div>
                    <div className="content">
                    <ul className="lines">
                        <li className="line"><span className="linenumber">1</span>
                            <span className="comment">...stuff we don't care about</span>
                        </li>
                        <li className="line"><span className="linenumber">2</span>
                            <span className="yellow">lea</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="white">rcx, player</span><span className="comment">  loading the player address</span>
                        </li>
                        <li className="line"><span className="linenumber">3</span>
                            <span className="red">call</span>&nbsp;&nbsp;&nbsp;<span className="white">Player::show_player_health(std::string)</span>
                        </li>
                        <li className="line"><span className="linenumber">4</span>
                            <span className="blue">lea</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="white">rax, [rbp+810h+var_398]</span>
                        </li>
                        <li className="line"><span className="linenumber">5</span>
                            <span className="green">mov</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="white">[rbp+810h+var_358], rax</span>
                        </li>
                        <li className="line"><span className="linenumber">6</span>
                            <span className="orange">lea</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="white">rdx, [rbp+810h+var_6F8]</span>
                        </li>
                        <li className="line"><span className="linenumber">7</span>
                            <span className="yellow">mov</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="white">rcx, [rbp+810h+var_358]</span>
                        </li>
                        <li className="line"><span className="linenumber">3</span>
                            <span className="red">call</span>&nbsp;&nbsp;&nbsp;<span className="white">std::string const</span>
                        </li>
                        <li className="line"><span className="linenumber">4</span>
                            <span className="blue">mov</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="white">[rbp+810h+var_28], rax</span>
                        </li>
                        <li className="line"><span className="linenumber">5</span>
                            <span className="green">mov</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="white">rdx, [rbp+810h+var_28]</span>
                        </li>
                        <li className="line"><span className="linenumber">6</span>
                            <span className="orange">lea</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="white">rcx, enemy</span><span className="comment">  loading the enemy address</span>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/barena/main_disass.png"}/>
                </div>
                If we click into the player structure, we can see it stored in the .data section along with our game structure, and enemy structure as seen in the screenshot below. This is expected as we know they're static.
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/barena/player_struct.png"}/>
                </div>
                Truthfully, we could cut this short here and pretty reliably find this structure again - manually subtracting this address from the module's base address gives us 0x3C528. This is the relative offset to use in our trainer. But that's no fun, so I wanted to try to dynamically resolve the player structure address. My plan of attack to accomplish this:
                <div className="blog-list-container" >
                    <ul className="blog-list">
                        <li>Scan for a byte pattern to resolve the <a target="_blank" rel="noreferrer" href="https://www.felixcloutier.com/x86/lea">lea</a> call</li>
                        <li>Add an offset to account for the mask bytes</li>
                        <li>Read the memory at this offset (this is our offset value)</li>
                        <li>Sum the offset value and the address of the next instruction - this will give us our player address</li>
                    </ul>
                </div>
                Here's the code for it:
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/barena/pattern.png"}/>
                </div>
                Pattern scanning isn't a new technique but here are some good resources for learning more: <a target="_blank" rel="noreferrer" href="https://guidedhacking.com/threads/external-internal-pattern-scanning-guide.14112/">Guided Hacking - External and Internal Pattern Scanning Guide</a> and <a href="https://www.unknowncheats.me/forum/c-and-c-/330081-findpattern-external.html">UC - Find Pattern External</a>. I use a function that reads 4 KiB chunks at a time and Guided Hacking's basic byte comparison function to compare bytes. This returns the first instance of a matched pattern, so be careful to search for specific enough byte patterns and be sure to keep endianness in mind depending of the tools you use. Here's an example of the byte pattern we used from IDA's hex view: 
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/barena/pattern_hex.png"}/>
                </div>
                That was really the bulk of the implementation. Let's fire up both programs and see them in action once more. Below you'll see our trainer on the left, changing the player's stats to double the normal starting values. On the right, the game process completely oblivious to our shenanigans.
                <div className="blog-image-container">
                    <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/barena/full_preview.gif"}/>
                </div>
            </div>
            <div className="blog-p">
                Can't trust anyone these days - 👋 Later!
            </div>
        </div>
    )
}
export default Barena;