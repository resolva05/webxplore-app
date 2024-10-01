import{ useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HeroSection.css';
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  const [headingWords, setHeadingWords] = useState([]);

  useEffect(() => {
    const heading = "Welcome to Resolva Insights";
    setHeadingWords(heading.split(" "));
  }, []);

  return (
    <section className="hero-section">
      <div className="bckgrdimg" />
      <Container fluid>
        <Row className="justify-content-center align-items-center hero-content">
          <Col md={8} className="text-center">
            <h1 className="hero-title">
              {headingWords.map((word, index) => (
                <span key={index} className={`word word-${index}`}>
                  {word}
                </span>
              ))}
            </h1>
            <p className="hero-description">
              Resolva develops an easy-to-use, full-service e-commerce platform that includes everything we need to successfully sell software globally.
            </p>
            <div className="hero-buttons">
              <NavLink to={'/contact'}><button className="hero-button cntus">Contact Us</button></NavLink>
              <NavLink to={'./blogpage'}><button className="hero-button blgpage">Blog Page</button></NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
