// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.jpg"
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="" style={{ backgroundColor: "#2b2a29" }}>
        <Container>

          <img src={logo} alt="" style={{ height: "60px", borderRadius: "15px", marginLeft: "10px" }} className='shadow-lg img' />

          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
              <NavLink to='/home' style={{ marginRight: "50px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Home</NavLink>
              <NavLink to='/service' style={{ marginRight: "50px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Services</NavLink>
              <NavLink to='/portfolio' style={{ marginRight: "40px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Portfolio</NavLink>
              <NavLink to='' style={{ marginRight: "30px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header