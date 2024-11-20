import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logoimg.png";
import SearchRecommendation from "../SearchRecommendations/SearchRecommendations.jsx"; // Import the new recommendations component
import axios from "axios";
import "./Header.css";

const Header = () => {
  const [showSearchBox, setShowSearchBox] = useState(false); // Search box visibility
  const [query, setQuery] = useState(""); // Search query
  const [searchResults, setSearchResults] = useState([]); // Search results
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/home?query=${encodeURIComponent(searchQuery)}`);
    }
  };
  const closeSearchBar = () => {
    setShowSearchBox(false);  // Close search bar on selection
    setQuery("");  // Reset query after selection
    setSearchResults([]); // Clear search results after selection
  };
  // Toggle search box visibility
  const toggleSearchBox = () => {
    setShowSearchBox((prevState) => !prevState);
    setQuery(""); // Clear query when closing the search box
    setSearchResults([]); // Clear search results when closing the search box
  };

  // Handle scroll event for sticky navbar
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
              <Nav className="ms-auto d-flex align-items-center">
            {/* Other nav items */}
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              onClick={toggleSearchBox}
              className="search-icon"
              aria-label="Search"
            />
          </Nav>
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
         {searchQuery && <SearchRecommendation query={searchQuery} closeSearchBar={closeSearchBar}/>}
        </div>
      </header>
    )}
    </div>
  );
};

export default Header;
