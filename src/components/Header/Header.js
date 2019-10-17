import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    render(){
        return(
            <header>
                <div className="feature-msg">
                    <h2>Know your Drink. <br/>
                     Know your Mixologist.</h2>
                </div>
            </header>
        )
    }
}

export default Header;