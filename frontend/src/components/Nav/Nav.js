import React from 'react';
import Logo from './Logo.js';
import Menu from './Menu.js';

const Nav = () => {
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <Logo />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Menu />
                </div>
            </nav>
        </div>
    );
}

export default Nav;