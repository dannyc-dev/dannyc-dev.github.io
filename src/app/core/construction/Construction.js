import React from 'react';
import { ReactComponent as ConstructionLogo} from '../../../assets/under_construction.svg';
import './Construction.scss';


function Construction() {
    return (
        <div className="construction-page">
            <ConstructionLogo />
            <div className="under-construction-header">
                <p className="header">Coming Soon!</p>
                <p className="message"></p>
            </div>
        </div>  
    )
}

export default Construction;