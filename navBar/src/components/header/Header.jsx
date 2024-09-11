import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.jpg"
import './Header.css'

const Header = () => {
  return (
    <div>

        <Navbar expand="lg" className="bg-secondary">
          <Container>
            <a href="#home">
              <img src={logo} alt="" style={{ height: "60px", borderRadius: "15px", marginLeft: "10px"}} className='shadow-lg img'/></a>
              
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Nav.Link href='#about' className='/' style={{marginRight:"50px", fontSize:"20px", color:""}}>Services</Nav.Link>
                <Nav.Link href='#contact' className='/' style={{marginRight:"40px", fontSize:"20px"}}>Portfolio</Nav.Link>
                <Nav.Link href='#link' className='/' style={{marginRight:"30px", fontSize:"20px"}}>Contact Us</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        Home
        <br />
        
      </div>
  )
}

export default Header