import React, { Component } from 'react';
import './nav.scss';
import logo from '../../assets/logo.svg';

class Logo extends Component {
    render(){
        return(
            <div id="logo">
                <img src={logo} alt="The Crafty Mixologist"/>
                <h1>The Crafty Mixologist</h1>
            </div>
        )
    }
}

export default Logo;