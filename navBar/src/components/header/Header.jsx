// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.jpg"
import './Header.css'
import { NavLink } from 'react-router-dom';
// import searchlogo from '../../assets/search.png'
// import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false); // State for search field expansion

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchFocus = () => {
    setSearchActive(true); // Expand search bar
  };

  const handleSearchBlur = () => {
    setSearchActive(false); // Collapse search bar when not in focus
  };
  return (
    <div>
      <Navbar expand="lg" className={`main-nav ${scrolled ? "scrolled" : ""}`} fixed="top" style={{border:"2px solid-yellow"}}>
        <Container>
          <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!searchActive && ( // Hide navigation links when the search bar is active
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
              </Nav>
            )}
            <Form className={`d-flex search-bar ${searchActive ? "active" : ""}`}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
                onFocus={handleSearchFocus} // Expand search on focus
                onBlur={handleSearchBlur} // Collapse search when not focused
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header