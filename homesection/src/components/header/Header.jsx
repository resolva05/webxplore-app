import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  // Function to toggle search box visibility
  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <div className='head'>
      <Navbar expand="lg" className="sticky-top" style={{ backgroundColor: "white" }}>
        <Container>

          <NavLink to="/home" className="maintext" >Resolva Insights</NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto d-flex align-items-center" style={{ flexWrap: "wrap" }}>
              <NavLink to="/home" className="nav-link">Home</NavLink>
              <NavLink to="/service" className="nav-link">Services</NavLink>
              <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
              <NavLink to="/casestudy" className="nav-link">Case Study</NavLink>
              <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
              <NavLink to="/contact" className="nav-link">Contact Us</NavLink>

              {/* Search Icon */}
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                onClick={toggleSearchBox}
                className="search-icon"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Box */}
      <div className={`search-box ${showSearchBox ? 'show' : ''}`}>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
          />
        </Form>
      </div>
    </div>
  );
}

export default Header;
