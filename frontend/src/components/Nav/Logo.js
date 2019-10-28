import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import logo from '../../assets/logo.svg';

class Logo extends Component {
    render(){
        return(
            <div id="logo">
                <Link to="/">
                    <img src={logo} alt="The Crafty Mixologist"/>
                    <h1>The Crafty Mixologist</h1>
                </Link>
            </div>
        )
    }
}

export default Logo;