import React,{ Component } from 'react';
import './nav.scss';

class Menu extends Component {
    render(){
        return(
            <div id="menu">
                <ul className="menu-links">
                    <li>
                        <a href="http://www.google.com">About</a>
                    </li>
                    <li>
                        <a href="http://www.google.com">Contact</a>
                    </li>
                    <li>
                        <a href="http://www.google.com">Login</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;