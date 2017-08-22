import React, { Component } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a>React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
        <NavItem eventKey={2}><Link to='/contact'>Contact</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>     
      </div>
    );
  }
}

export default NavBar ;
