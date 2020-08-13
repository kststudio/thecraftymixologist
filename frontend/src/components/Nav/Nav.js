import React from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap'
import logo from '../../assets/logo.svg'
import './nav.scss'


const Navigation = ({isOpen, setIsOpen}) => {

  const toggle = () => setIsOpen(!isOpen);

    return (
      <div>
     <Navbar color="light" light expand="md" className="d-flex justify-content-between">
        <NavbarBrand href="/">
          <img className="logo" src={logo} alt="The Crafty Mixologist" />
          <h4 className="d-none d-md-inline">The Crafty Mixologist</h4>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/posts">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default Navigation