import React, { useEffect } from 'react'; 
import { useLocation, useNavigate } from 'react-router-dom'
import './Logo.scss';

function Logo(props) {
    const location = useLocation();
    const navigate = useNavigate();
    let class_name = 'logo-static';
    const handleOnSubmit = () => {
        navigate(`/`);
    };

    if (location.pathname === '/') {
        class_name = 'logo-letter';
    }


    useEffect(() => {

    }, []);

    return (
        <div className='logo-container' onClick={handleOnSubmit}>
            <div className={"d"} id={class_name}>d</div>
            <div className={"a"} id={class_name}>a</div>
            <div className={"n"} id={class_name}>n</div>
            <div className={"n_2"} id={class_name}>n</div>
            <div className={"y"} id={class_name}>y</div>
            <div className={"c"} id={class_name}>c</div>
            <div id="period">.</div>
        </div>
    )
}

export default Logo;