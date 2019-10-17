import React,{ Component } from 'react';
import './nav.scss';

class Menu extends Component {
    render(){
        return(
            <div id="menu">
                <ul class="menu-links">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;