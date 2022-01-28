import React from 'react';
import ninjatalent_logo from "../../assets/images/ninja_talent_logo.PNG";

import '../../assets/css/header.css';

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={ ninjatalent_logo } alt="ninjatalent-logo-img" width="112" height="28" />
                </a>
                <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </nav>
    )
}

export default Header;