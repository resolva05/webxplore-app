import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
import logo from "../src/assets/logo.jpg"
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div>

        <Navbar expand="lg" className="bg-secondary">
          <Container>
            <a href="#home">
              <img src={logo} alt="" style={{ height: "60px", borderRadius: "15px", marginLeft: "10px" }} /></a>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Footer />
      </div>
    </>

  )
}

export default App
