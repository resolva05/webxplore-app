import "../../App.css";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import aws from '../../assets/aws.png'
import azure from '../../assets/azure.png'
import cloud from '../../assets/cloud.png'



const openInsta = () => {
  window.open("https://www.instagram.com/webxplore_studio?igsh=MTR3MmpmNHNqYnF2Nw==");
};
const openLinkedin = () => {
  window.open("https://www.linkedin.com/company/webxplore-studio");
};

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const NewsletterInput = styled.input`
  width: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
`;

const NewsletterButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff6b6b;
  color: #fff;
  cursor: pointer;
  width: 5vw;
  &:hover {
    background-color: #ff4b4b;
  }
`;

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/subscribeNewsletter", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <>
      

      {/* FooterContainer */}
      <FooterContainer>
        {/* Web Development Partners Section */}
      <PartnerSection>
        <h3>Our Web Development Partners</h3>
        <div className="partners">
          <div className="partner">
            <img src={aws} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="partner">
            <img src={azure} alt="Microsoft Azure" />
            <p>Microsoft Azure</p>
          </div>
          <div className="partner">
            <img src={cloud} alt="Google Cloud" />
            <p>Google Cloud</p>
          </div>
        </div>
      </PartnerSection>
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <img src={logo} alt="Logo" style={{ height: "24vh" }} />
          </div>

          {/* About Section */}
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/">Press</NavLink>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="footer-section">
            <h4>Information</h4>
            <ul>
              <li>
                <NavLink to="/termsandcondtion">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/privacypolicy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/cookiespolicy">Cookies Policy</NavLink>
              </li>
              <li>
                <NavLink to="/sitemap">Sitemap</NavLink>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <NavLink to="/webdevelopment/service/subservice1">Web Development</NavLink>
              </li>
              <li>
                <NavLink to="/mobiledevelopment/service/subservice2">Mobile Development</NavLink>
              </li>
              <li>
                <NavLink to="/services/SEO">SEO</NavLink>
              </li>
              <li>
                <NavLink to="/services/PaymentGatewayIntegration">Payment Gateway</NavLink>
              </li>
              <li>
                <NavLink to="/services/AI_Integration_Services">AI Integration</NavLink>
              </li>
              <li>
                <NavLink to="/services/SocialMediaMarketing">Social Media</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Socials</h4>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start">
              <li style={{ marginRight: "10px" }}>
                <NavLink to="/">
                  <i className="fa-brands fa-facebook"></i>
                </NavLink>
              </li>
              <li style={{ marginRight: "10px" }}>
                <NavLink onClick={openInsta}>
                  <i className="fa-brands fa-instagram"></i>
                </NavLink>
              </li>
              <li style={{ marginRight: "10px" }}>
                <NavLink onClick={openLinkedin}>
                  <i className="fa-brands fa-linkedin"></i>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>FAQs</h4>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/faq">
                  <i className="fa-solid fa-circle-question"></i>
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news and offerings.</p>
            <NewsletterForm onSubmit={handleNewsletterSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <NewsletterButton type="submit" className="send">
                Send
              </NewsletterButton>
            </NewsletterForm>
            {message && <p>{message}</p>}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy;{new Date().getFullYear()} WebXplore Studio - All Rights Reserved</p>
        </div>
      </FooterContainer>
    </>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background: black;
  color: white;
  padding: 2rem 1rem;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;

    .footer-logo {
      flex: 1;
      text-align: center;

      img {
        height: 100px;
        border-radius: 15px;
      }
    }

    .footer-section {
      flex: 1;
      min-width: 150px;

      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 0.5rem 0;

          a {
            color: white;
            text-decoration: none;
          }

          a:hover {
            color: grey;
          }
        }
      }

      .social-icons {
        display: flex;
        gap: 1rem;

        i {
          font-size: 1.5rem;
          cursor: pointer;

          &:hover {
            color: grey;
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.9rem;
    border-top: 1px solid grey;
    padding-top: 1rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }

    .footer-logo img {
      height: 80px;
    }

    .footer-section {
      text-align: center;
    }
      .send{
        width:5rem
      }
  }
`;

const PartnerSection = styled.section`
  padding: 2rem 1rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .partners {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;

    .partner {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 100px; /* Adjust size as needed */
        margin-bottom: 0.5rem;
      }

      p {
        font-weight: bold;
        color: #333;
      }
    }
  }

  @media (max-width: 768px) {
    .partners {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

