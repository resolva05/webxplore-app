// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/logo.jpg"
import './Header.css'
import { NavLink } from 'react-router-dom';
// import searchlogo from '../../assets/search.png'
import { Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  // Function to toggle the search bar
  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div>
      <Navbar expand="lg" className="" style={{ backgroundColor: "#2b2a29" }}>
        <Container>

          <img src={logo} alt="" style={{ height: "60px", borderRadius: "15px", marginLeft: "10px" }} className='shadow-lg img' />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="ms-auto" >
              <NavLink to='/home' style={{ marginRight: "50px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Home</NavLink>
              <NavLink to='/service' style={{ marginRight: "50px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Services</NavLink>
              <NavLink to='/portfolio' style={{ marginRight: "40px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Portfolio</NavLink>
              <NavLink to='/contact' style={{ marginRight: "30px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Contact Us</NavLink>
            
             
            </Nav> */}
            <Nav className="ms-auto d-flex align-items-center" >
              <NavLink to='/home' style={{ marginRight: "50px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Home</NavLink>
              <NavLink to='/service' style={{ marginRight: "50px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Services</NavLink>
              <NavLink to='/portfolio' style={{ marginRight: "50px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Portfolio</NavLink>
              <NavLink to='/contact' style={{ marginRight: "30px", fontSize: "20px", color: "white", textDecoration: 'none' }}>Contact Us</NavLink>

              {/* Search Icon */}
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                onClick={toggleSearchBar}
                style={{ color: "white", cursor: "pointer", marginLeft: "30px", marginRight: '5px' }}
              />

              {/* Search Bar */}
              <div className={`search-bar-container ${showSearch ? 'show' : ''}`}>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ width: "10vw" }}
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="lg"
                    style={{ color: "white", cursor: "pointer", marginTop:"3px" , marginLeft:"10px", border:"2px solid white", padding:"5px", borderRadius:"20px"}}
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