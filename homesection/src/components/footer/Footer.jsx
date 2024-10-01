// import React from 'react'
import '../../App.css'
import styled from 'styled-components'
import logo from "../../assets/logo.jpg"
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row text-center text-md-start">
                        {/* Logo Section */}
                        <div className="col-12 col-md-3 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">

                            <img
                                src={logo}
                                alt="Logo"
                                style={{
                                    height: "100px",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>

                        {/* About Section */}
                        <div className="col-12 col-md-2 mb-2 mb-md-0">
                            <h4>About</h4>
                            <ul className="list-unstyled">
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                                <li><NavLink to="/aboutus">About Us</NavLink></li>
                                <li><NavLink to="/">Careers</NavLink></li>
                                <li><NavLink to="/">Press</NavLink></li>
                            </ul>
                        </div>

                        {/* Socials Section */}
                        <div className="col-12 col-md-2 mb-2 mb-md-0">
                            <h4>Information</h4>
                            <ul className="list-unstyled">
                                <li><NavLink to="/">Terms & Conditions</NavLink></li>
                                <li><NavLink to="/">Privacy Policy</NavLink></li>
                                <li><NavLink to="/">Licensing</NavLink></li>
                            </ul>
                        </div>

                        {/* Social Icons Section */}
                        <div className="col-12 col-md-2 mb-2 mb-md-0">
                            <h4>Socials</h4>
                            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
                                <li style={{ marginRight: "10px" }}>
                                    <NavLink to="/"><i className="fa-brands fa-facebook"></i></NavLink>
                                </li>
                                <li style={{ marginRight: "10px" }}>
                                    <NavLink to="/"><i className="fa-brands fa-instagram"></i></NavLink>
                                </li>
                                <li style={{ marginRight: "10px" }}>
                                    <NavLink to="/"><i className="fa-brands fa-linkedin"></i></NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-2 mb-2 mb-md-0">
                            <h4>FAQs</h4>
                            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
                                <li style={{ marginRight: "10px" }}>
                                    <NavLink to="/faq"><i className="fa-solid fa-circle-question"></i></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom text-center mt-3">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>

    );
}
export default Footer

const FooterContainer = styled.footer`
  .footer-middle {
    background: black; /* Set footer background to black */
    padding-top: 3rem;
    color: white; /* Set text color to white */
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: white; /* Set link color to white */
  }

  ul li a:hover {
    color: grey; /* Optionally change the hover color to grey */
  }
`;
