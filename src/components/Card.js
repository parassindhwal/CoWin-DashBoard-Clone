import React from 'react';
import './Card.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSyringe, faUsers, faBuilding } from '@fortawesome/free-solid-svg-icons';

function Card({ icon, mainTitle, title1, title2, number, number1, number2}) {
    return (
        <div className="card">
            <div className="card__icon">
                <FontAwesomeIcon className="icon" icon={icon} />
            </div>
            <div className="card__stats">
                <div className="card__stats__title"> 
                    <h3>{mainTitle}</h3>
                    <h2>{number}</h2>
                </div>
                <div className="card__stats__stat">
                    <div>
                        <h4>{title1}</h4>
                        <h3>{number1}</h3>
                    </div>
                    <div>
                        <h4>{title2}</h4>
                        <h3>{number2}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

// <h1>Card</h1>
// <div>
//     <FontAwesomeIcon icon={icon} />
//     <div>
//         <h3>{title}</h3>
//         <h2>{total}</h2>
//     </div>
// </div>
// <div>
//     <div>
//         <h4>{innerTitle1}</h4>
//         <h3>{count1}</h3>
//     </div>
//     <div>
//         <h4>{innerTitle2}</h4>
//         <h3>{count2}</h3>
//     </div>
// </div>