import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function NavBar() {
  return <>
        <div className='navbar'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/home' className="nav-item me-3">ALL</Link>
            <Link to='/full-stack' className="nav-item me-3">FULL STACK</Link>
            <Link to='/data-science' className="nav-item me-3">DATA SCIENCE</Link>
            <Link to='/cyber-security'className="nav-item me-3">CYBER SECURITY</Link>
            <Link to='/ui-ux' className="nav-item me-3">UI/UX</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        
  
  </>
    
  
}

export default NavBar