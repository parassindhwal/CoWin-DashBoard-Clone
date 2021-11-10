import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__goi">
                    <img className="header__goi__logo" src="https://www.cowin.gov.in/assets/images/emblem-gov.svg" alt="national-emblem" />
                    <div>
                        <a className="header__goi__site" href="https://www.india.gov.in/" target="_blank">Ministry of Health and Family Welfare</a>
                    </div>
                </div>
                <div className="header__nav">
                    <a className="header__nav__dash" href="">Dashboard</a>
                    <a className="header__nav__content" href="#main">Skip To Main Content</a>
                </div>
            </div>
        </header>
    )
}

export default Header;
