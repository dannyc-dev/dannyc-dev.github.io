import React from 'react';
import { ReactComponent as ConstructionLogo} from '../../../assets/under_construction.svg';
import './Construction.scss';


function Construction() {
    return (
        <div className="construction-page">
            <div className="under-construction-header">
                Under Construction
            </div>
            <ConstructionLogo />
        </div>  
    )
}

export default Construction;