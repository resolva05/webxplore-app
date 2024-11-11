import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logoimg.png";

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle search box visibility
  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  // Handle scroll event
  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`head ${isSticky ? "sticky" : ""}`}>
      <Navbar
        expand="lg"
        className={`sticky-top ${isSticky ? "is-sticky" : ""}`}
        style={{ backgroundColor: "white" }}
      >
        <Container>
          <img src={logo} alt="logo" className="logoheader" />
          <NavLink
            to="/home"
            className="maintext"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            WebXplore Studio
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              className="ms-auto d-flex align-items-center"
              style={{ flexWrap: "wrap" }}
            >
              <NavLink
                to="/home"
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </NavLink>
              <NavLink
                to="/service"
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/casestudy"
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Case Study
              </NavLink>
              <NavLink
                to="/pricing"
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact Us
              </NavLink>

              {/* Search Icon */}
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                onClick={toggleSearchBox}
                className="search-icon"
                aria-label="Search"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Search Box */}
      <div className={`search-box ${showSearchBox ? "show" : ""}`}>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" />
        </Form>
      </div>
    </div>
  );
};

export default Header;
