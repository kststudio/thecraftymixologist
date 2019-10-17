import React, { Component } from 'react';
import Logo from './Logo.js';
import Menu from './Menu.js';
import './nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav>
                <Logo />
                <Menu />
            </nav>
        )
    }
}

export default Nav;