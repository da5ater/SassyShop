import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {FaShoppingCart , FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Sassy Shop" style={{ height: '40px' }} className='' /> 
            <span className="ms-2">Sassy Shop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart"> <FaShoppingCart /> Cart </Nav.Link>
            <Nav.Link href="/login"> <FaUser /> Login </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default Header