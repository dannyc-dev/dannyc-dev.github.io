import React, { useEffect, useState } from 'react'; 
import './Logo.scss';

function Logo(props) {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => {
    
    };

    useEffect(() => {

    }, []);

    return (
        <div className={'logo-container'} onMouseEnter={toggleHover}>
            <div className={"d"} id="logo-letter">d</div>
            <div className={"a"} id="logo-letter">a</div>
            <div className={"n"} id="logo-letter">n</div>
            <div className={"n_2"} id="logo-letter">n</div>
            <div className={"y"} id="logo-letter">y</div>
            <div className={"c"} id="logo-letter">c</div>
            <div id="period">.</div>
        </div>
    )
}

export default Logo;