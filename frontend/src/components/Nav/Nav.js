import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand } from 'reactstrap'
import logo from '../../assets/logo.svg'
import './nav.scss'


const Navigation = () => {
    return(
      <Navbar light expand="md" className="d-flex justify-content-between">

        <NavbarBrand href="/">
          <img className="logo" src={logo} alt="The Crafty Mixologist" />
          <h4>The Crafty Mixologist</h4>
        </NavbarBrand>

        <Nav className="justify-content-end">
          <div id="menu">
            <ul className="navbar-nav d-flex justify-content-end">
              <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </Nav>

      </Navbar>
    )
}

export default Navigation