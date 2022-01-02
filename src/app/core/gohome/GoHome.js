import HomeLogo from "../../../assets/gohome.svg";
import { useLocation, useHistory } from 'react-router-dom'
import './GoHome.scss';

function GoHome(props) {
    const location = useLocation();
    const history = useHistory();
    
    const redirect = (route) => { 
        if ((route === "home") && (location.pathname === "/")) {
            props.closeMenu(props.menu);
        } else if (location.pathname !== '/' + route) {
            history.push(route);
        } else {
            props.closeMenu(props.menu);
        }
    }
    return (
        <div className='home-container'>
            <img className='home-logo' src={HomeLogo} onClick={(e) => {redirect('home');}}/>
        </div>
    )
}   

export default GoHome;