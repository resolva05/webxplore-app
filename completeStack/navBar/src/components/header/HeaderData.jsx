import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, Header, ProductItem } from "./Header";
import { cn } from "../../utils/cn";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import hi from "../../assets/portimg.png";
import weblogo from "../../assets/weblogo.png";
import s2 from "../../assets/s2img.png";
import photo1 from "../../assets/seo.png";
import photo2 from "../../assets/paymentgataway.png";
import photo3 from "../../assets/aiservice.png";
import photo4 from "../../assets/socialmedia.png";
import pic1 from "../../assets/pic1.png";
import about from "../../assets/aboutus.png";
import casestudy from "../../assets/casestudy.png";
import logo from "../../assets/logoimg.png";
import contact from "../../assets/contactus.png";
import SearchRecommendation from "../SearchRecommendations/SearchRecommendations.jsx";

export function HeaderData() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
      <div className="pt-20 w-full">{/* Your page content goes here */}</div>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null); // Stores the active product item
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const closeSearchBar = () => {
    setSearchVisible(false); // Close search box when an item is selected
    setActive(null); // Reset any active dropdown when an item is selected
  };
  const [hovered, setHovered] = useState(false); // Track hover state
  // Reset header state when navigating
  const resetHeaderState = () => {
    setSearchVisible(false);
    setSearchQuery("");
    setActive(null); // Reset active product item
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible); // Toggle search bar visibility
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/home?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  useEffect(() => {
    // Reset the header state when the user navigates
    return () => resetHeaderState();
  }, [navigate]);

  const handleHeaderHover = (item) => {
    setActive(item); // Set the active product item on hover
  };

  const handleHeaderClick = () => {
    setActive(null); // Close the ProductItem when clicking
  };

  return (
    <div
      className={cn("fixed top-0 w-full z-50 bg-white shadow-md", className)}
    >
      <Menu setActive={setActive}>
        {/* Logo */}
        <NavLink to="./home" onClick={resetHeaderState}>
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-auto mr-20"
            style={{ marginBottom: "-20px", marginTop: "-22px" }}
          />
        </NavLink>

        {/* Menu Items */}
        <NavLink
          to="./home"
          style={{ textDecoration: "none" }}
          onClick={() => {
            handleHeaderClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleHeaderHover("home")}
        >
          <Header item="Home" />
        </NavLink>

        <NavLink
          to="./service"
          style={{ textDecoration: "none" }}
          onClick={() => {
            handleHeaderClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleHeaderHover("services")}
        >
          <Header setActive={setActive} active={active} item="Services">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Web Development"
                to="/service/webdevelopment"
                src={weblogo}
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Mobile Development"
                to="/service/mobiledevelopment"
                src={s2}
                description="Production ready Tailwind CSS components for your next project"
              />
              <ProductItem
                title="SEO"
                to="/service/SEO"
                src={photo1}
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Payment Gateway Integration"
                to="/service/PaymentGatewayIntegration"
                src={photo2}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="AI Integration Services"
                to="/service/AI_Integration_Services"
                src={photo3}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Social Media Marketing Services"
                to="/service/SocialMediaMarketing"
                src={photo4}
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </Header>
        </NavLink>

        {/* Other Menu Items (Same structure as Services) */}
        <NavLink
          to="./portfolio"
          style={{ textDecoration: "none" }}
          onClick={() => {
            handleHeaderClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleHeaderHover("portfolio")}
        >
          <Header setActive={setActive} active={active} item="Portfolio">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Portfolio"
                to="/portfolio"
                src={hi}
                description="Prepare for tech interviews like never before."
              />
            </div>
          </Header>
        </NavLink>

        <NavLink
          to="./casestudy"
          style={{ textDecoration: "none" }}
          onClick={() => {
            handleHeaderClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleHeaderHover("casestudy")}
        >
          <Header setActive={setActive} active={active} item="Case Study">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Case Study"
                to="/casestudy"
                src={casestudy}
                description="Prepare for tech interviews like never before."
              />
            </div>
          </Header>
        </NavLink>

        <NavLink
          to="./pricing"
          style={{ textDecoration: "none" }}
          onClick={() => {
            handleHeaderClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleHeaderHover("pricing")}
        >
          <Header setActive={setActive} active={active} item="Pricing">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Pricing"
                to="/pricing"
                src={pic1}
                description="Prepare for tech interviews like never before."
              />
            </div>
          </Header>
        </NavLink>

        <NavLink
          to="./contact"
          style={{ textDecoration: "none" }}
          onClick={() => {
            handleHeaderClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleHeaderHover("contact")}
        >
          <Header setActive={setActive} active={active} item="Contact Us">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Contact Us"
                to="/contact"
                src={contact}
                description="Prepare for tech interviews like never before."
              />
            </div>
          </Header>
        </NavLink>

        <NavLink
          to="./aboutus"
          style={{ textDecoration: "none" }}
          onClick={() => {
            handleHeaderClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onMouseEnter={() => handleHeaderHover("aboutus")}
        >
          <Header setActive={setActive} active={active} item="About Us">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="About Us"
                to="/aboutus"
                src={about}
                description="Prepare for tech interviews like never before."
              />
            </div>
          </Header>
        </NavLink>

        {/* Search Icon and Search Bar */}
        <div className="relative">
          <div
            className="cursor-pointer flex items-center justify-center mt-1 ml-5"
            onClick={toggleSearch}
          >
            <FaSearch size={20} />
          </div>

          {/* Search Bar */}
          {searchVisible && (
            <div
              className="absolute top-20 transform -translate-x-1/2 mt-4 transition-all ease-out duration-500"
              style={{ width: "40vw" }}
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
              />
              {searchQuery && <SearchRecommendation query={searchQuery}
              closeSearchBar={closeSearchBar}
              />}
            </div>
          )}
        </div>
      </Menu>
      {/* Close ProductItem dropdowns when hovering over search icon */}
      {hovered && (
        <div
          className="absolute w-full h-full top-0 left-0 bg-transparent"
          onMouseEnter={() => setActive(null)} // Close any active dropdown on hover
        />
      )}
    </div>
  );
}
