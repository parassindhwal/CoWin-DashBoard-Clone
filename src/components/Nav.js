import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <div className="navigation">
                <img className="navigation__logo" src="https://www.cowin.gov.in/assets/images/covid19logo.jpg" alt="" />
                <ul className="navigation__list">
                    {/* <li> <span>Vaccination Services</span> &nbsp; <span><FontAwesomeIcon icon={faCaretDown} /></span> </li>
                    <li> <span>Platforms</span> &nbsp; <span><FontAwesomeIcon icon={faCaretDown} /></span></li>
                    <li> <span>Resources</span> &nbsp; <span><FontAwesomeIcon icon={faCaretDown} /></span></li>
                    <li> <span>Support</span> &nbsp; <span><FontAwesomeIcon icon={faCaretDown} /></span></li> */}
                    {/* <li className="navigation__list__register">REGISTER / SIGN IN</li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Nav
