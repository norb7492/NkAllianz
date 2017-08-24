import React, { Component } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem,Tooltip } from 'react-bootstrap';
import './../../assets/images/de_GE.png';
import './../../assets/images/en_US.png';
import './../../assets/images/jp_JP.png';
import './../../assets/images/pt_BR.png';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a>NK</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullLeft>
        <NavItem eventKey={1}><Link to='/'><i className='fa fa-home'>&nbsp;</i>Home 1</Link></NavItem>
        <NavItem eventKey={2}><Link to='/contact'><i className='fa fa-envelope'>&nbsp;</i>Contact</Link></NavItem>
      </Nav>
      <Nav pullRight>
      <NavItem>
      <a href='#' data-toggle='tooltip' title='Veja o site em portugues'>
          <img alt='Veja o site em Português' className='Flags' src='app/assets/images/pt_BR.png'/>
      </a>
      </NavItem>
      <NavItem>
      <a href='#' data-toggle='tooltip' title='See that in English'>
      <img className='Flags' src='app/assets/images/en_US.png'/></a>
      </NavItem>
      <NavItem><img  className='Flags' src='app/assets/images/jp_JP.png'/></NavItem>
      <NavItem><img  className='Flags' src='app/assets/images/de_GE.png'/></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>     
      </div>
    );
  }
}

export default NavBar ;
