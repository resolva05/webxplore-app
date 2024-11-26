import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logoimg.png";
import SearchRecommendation from "../SearchRecommendations/SearchRecommendations.jsx";
import "./Header.css";

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/home?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleSearchBox = () => {
    setShowSearchBox((prevState) => !prevState);
  };

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
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto d-flex align-items-center">
              <NavLink
                to="/home"
                className="nav-link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </NavLink>
              <div className="nav-link service-dropdown">
                <NavLink
                  to="/service"
                  className="service-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Services
                </NavLink>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="dropdown-icon"
                  onClick={() => setDropdownVisible((prev) => !prev)}
                />
                {dropdownVisible && (
                  <div className="dropdown-menu animated-dropdown">
                    <NavLink
                      to="/service/webdevelopment"
                      className="dropdown-item"
                    >
                      Web Development
                    </NavLink>
                    <NavLink
                      to="/service/mobiledevelopment"
                      className="dropdown-item"
                    >
                      Mobile Development
                    </NavLink>
                    <div className="dropdown-item dropdown-submenu">
                      <span>Other Services</span>
                      <div className="submenu">
                        <NavLink to="/service/SEO" className="submenu-item">
                          SEO
                        </NavLink>
                        <NavLink
                          to="/service/PaymentGatewayIntegration"
                          className="submenu-item"
                        >
                          Payment Gateway Integration
                        </NavLink>
                        <NavLink
                          to="/service/AI_Integration_Services"
                          className="submenu-item"
                        >
                          AI Integration Services
                        </NavLink>
                        <NavLink
                          to="/service/SocialMediaMarketing"
                          className="submenu-item"
                        >
                          Social Media Marketing Services
                        </NavLink>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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

      {showSearchBox && (
        <header className="header">
          <div className="header-container">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for blogs or projects..."
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
            {searchQuery && (
              <SearchRecommendation
                query={searchQuery}
                closeSearchBar={() => setShowSearchBox(false)}
              />
            )}
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
