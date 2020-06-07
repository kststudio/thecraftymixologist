import React  from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
    return(
        <div id="menu">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;