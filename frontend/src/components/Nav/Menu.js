import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';

class Menu extends Component {
    render(){
        return(
            <div id="menu">
                <ul className="menu-links">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/create">Create Post</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li> 
                </ul>
            </div>
        )
    }
}

export default Menu;