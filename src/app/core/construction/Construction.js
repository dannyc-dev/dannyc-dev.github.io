import React from 'react';
import { ReactComponent as ConstructionLogo} from '../../../assets/under_construction.svg';
import './Construction.scss';


function Construction() {
    return (
        <div className="construction-page">
            <ConstructionLogo />
            <div className="under-construction-header">
                <p className="header">Under Construction</p>
                <p className="message">Check back soon for updates :)</p>
            </div>
        </div>  
    )
}

export default Construction;