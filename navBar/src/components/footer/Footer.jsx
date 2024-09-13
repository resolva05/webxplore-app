import React from 'react'
import '../../App.css'
import styled from 'styled-components'
import logo from "../../assets/logo.jpg"

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
                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                            <h4>About</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Press</a></li>
                            </ul>
                        </div>

                        {/* Socials Section */}
                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                            <h4>Socials</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Terms & Conditions</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Licensing</a></li>
                            </ul>
                        </div>

                        {/* Social Icons Section */}
                        <div className="col-12 col-md-3 mb-3 mb-md-0">
                            <h4>Follow Us</h4>
                            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
                                <li style={{ marginRight: "10px" }}>
                                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                </li>
                                <li style={{ marginRight: "10px" }}>
                                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                                <li style={{ marginRight: "10px" }}>
                                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
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
.footer-middle{
background: var(--mainDark);
padding-top: 3rem;
color: var(--mainWhite)
}

.footer-bottom{
paggding-top: 3rem;
padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}
ul li a:hover{
    color: var(--mainLightGrey)
}
`;