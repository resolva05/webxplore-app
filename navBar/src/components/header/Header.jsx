// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.jpg"
import './Header.css'
import { NavLink } from 'react-router-dom';
// import searchlogo from '../../assets/search.png'
import { Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  // const [showSearch, setShowSearch] = useState(false);

  // const toggleSearchBar = () => {
  //   setShowSearch(!showSearch);
  // };

  const [showSearch, setShowSearch] = useState(false);

  // Function to toggle search bar visibility
  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div>
      <Navbar expand="lg" className="" style={{ backgroundColor: "#2b2a29" }}>
        <Container>

          <img src={logo} alt="" style={{ height: "60px", borderRadius: "15px", marginLeft: "10px" }} className='shadow-lg img' />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto d-flex align-items-center" style={{ flexWrap: "wrap" }}>
              <NavLink
                to="/home"
                className="nav-link"
                style={{ marginRight: "30px", fontSize: "18px", color: "white", textDecoration: "none" }}
              >
                Home
              </NavLink>
              <NavLink
                to="/service"
                className="nav-link"
                style={{ marginRight: "30px", fontSize: "18px", color: "white", textDecoration: "none" }}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className="nav-link"
                style={{ marginRight: "30px", fontSize: "18px", color: "white", textDecoration: "none" }}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                style={{ marginRight: "20px", fontSize: "18px", color: "white", textDecoration: "none" }}
              >
                Contact Us
              </NavLink>

              {/* Search Icon */}
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                onClick={toggleSearchBar}
                className="search-icon"
              />

              {/* Search Bar */}
              <div className={`search-bar-container ${showSearch ? "show" : ""}`}>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="lg"
                    className="search-submit-icon"
                  />
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header