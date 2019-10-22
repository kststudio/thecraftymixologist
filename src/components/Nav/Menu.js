import React,{ Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './nav.scss';

class Menu extends Component {
    render(){
        return(
            <Router> 
                <div id="menu">
                    <ul className="menu-links">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/create">Create Post</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </Router> 
        )
    }
}

export default Menu;