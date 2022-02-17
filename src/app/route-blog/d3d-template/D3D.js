import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import GoBack from '../../core/goback/GoBack';
import './D3D.scss';

function D3D(props) {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, [])
    return (
        <div className="blog-body">
                <div className="blog-p">
                    <GoBack />
                    <CSSTransition
                            in={animate}
                            timeout={300}
                            classNames="slide"
                            unmountOnExit
                    >
                    <div className="blog-header-container">
                        {/* <img className='blog-header' alt='blog header' src={HeaderImage} /> */}
                    </div>
                    </CSSTransition>
                    <CSSTransition
                            in={animate}
                            timeout={300}
                            classNames="fade"
                            unmountOnExit
                    >
                    <div className="blog-title">
                        DirectX 11 3D Simulation Template
                    </div>
                    </CSSTransition>
                </div>
                <div className="blog-p">
                    <div className="blog-center" >
                        Github Links to repos:&nbsp;
                        <a target="_blank" rel="noreferrer" href="https://github.com/dannyc-dev/DirectX-3D-Simulation-Template">
                        DirectX-3D-Simulation-Template
                        </a>
                    </div>           
                    3D simulation template utilizing <a target="_blank" rel="noreferrer" href='https://github.com/microsoft/DirectXTK'>DirectXTK</a>. I put this together as a starting point for a few of my 3D simulation projects that utilize Microsoft's DirectX Toolkit Library. Some cool projects I've put together utilizing this template and the toolkit library:
                    <br/>Planet Simulation:<br/>
                    <div className="blog-image-container">
                        <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/d3d-sim/planet-medium.gif"}/>
                    </div>
                    Raptor Simulation:<br/>
                    <div className="blog-image-container">
                        <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/d3d-sim/raptor-medium.gif"}/>
                    </div>
                    Car Simulation:<br/>
                    <div className="blog-image-container">
                        <img className="blog-image-l pad-top pad-bot" alt="preview" src={"https://dannyc-assets.s3.amazonaws.com/d3d-sim/car-medium.gif"}/>
                    </div>
                    This template doesn't include any models, it's meant to serve as a guide for building and simulating your own models. You can drop your sdkmesh and any supporting files (like material files or texture files) into the d3d-template/ folder. By default it creates a model from model.sdkmesh but you can customize and change the name and even the method used to create the model - inside Game::CreateDeviceDependentResources. Inside this method, you have the ability to update the mesh name and method for creating the model, for example if you want to use CMO use Model::CreateFromCMO. Likewise, if you want to change the directory of the model, you can do so by updating the IEffectFactory - see <a target="_blank" rel="noreferrer" href='https://github.com/Microsoft/DirectXTK/wiki/EffectFactory#directories'>here</a> for more info. All of this is built on top of DirectXTK and their wiki has all the documentation you need to create and fine tune your simulation, I highly recommend reading through it and seeing all the things you can do - <a target="_blank" rel="noreferrer" href='https://github.com/Microsoft/DirectXTK/wiki'>Wiki</a>. For example, you can visit <a target="_blank" rel="noreferrer" href='https://github.com/microsoft/DirectXTK/wiki/Effects'>this page</a> for information about adding effects. In the second example above, the raptor model has a lighting effect applied to it based on this documentation. 
                    <br/>
                    Overall, it was a really fun exercise playing around with the DirectX SDK and the toolkit. It made me very grateful for the libraries and tooling built around it that make it a bit easier to interact with some hardware components :).
                </div>
        </div>
    );
}

export default D3D;