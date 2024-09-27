import React from "react";
import { useEffect, useRef } from "react";
import "./AboutUs.css";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  const contentSectionRef = useRef(null);
  const keyPointsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    const contentSection = contentSectionRef.current;
    const keyPoints = keyPointsRef.current.querySelectorAll(".key-point");
    observer.observe(contentSection);
    keyPoints.forEach((point) => observer.observe(point));
    return () => {
      observer.unobserve(contentSection);
      keyPoints.forEach((point) => observer.unobserve(point));
    };
  }, []);

  return (
    <div className="about-us-page">
      {/* Header Section */}
      <header className="about-header text-center">
        <h1 className="about-main-heading" style={{ color: "white" }}>
          About Us
        </h1>
      </header>

      {/* Content Section */}
      <div
        className="about-us-container container mt-5 p-4"
        ref={contentSectionRef}
      >
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              className="img-fluid about-img"
            />
          </div>
          <div className="col-md-6 text-center text-md-left">
            <h2 className="about-subheading mb-3" style={{ color: "#007bff" }}>
             What We Do
            </h2>
            <p className="about-description">
              At WebX Studio, we are passionate about transforming your ideas
              into powerful digital experiences. Our commitment goes beyond just
              building websites; we focus on crafting solutions that resonate
              with your audience and drive meaningful engagement
            </p>
            <h2 className="about-subheading mb-3" style={{ color: "#007bff" }}>
              Our Process
            </h2>
            <p className="about-description">
              1. Discovery & Planning: We start by understanding your business,
              goals, and target audience to define the scope of your project.{" "}
              <br />
              2. Design & Prototyping: Our designers craft visually appealing
              and user-friendly interfaces, ensuring your brand identity is
              reflected. <br />
              3. Development: Our developers bring the design to life, building
              a responsive and fully functional website using the latest
              technologies. <br />
              4. Testing: We rigorously test the website across different
              browsers and devices to ensure it performs flawlessly. <br />
              5. Launch & Maintenance: After launch, we provide ongoing support
              and maintenance to keep your website updated and secure. <br />
            </p>
            <button className="btn btn-primary about-btn">Discover More</button>
          </div>
        </div>
      </div>

      {/* Key Points Section */}
      <div className="key-points-section container mt-5 p-4" ref={keyPointsRef}>
        <h2
          className="about-subheading text-center mb-4"
          style={{ color: "#007bff" }}
        >
          Why Choose Us?
        </h2>
        <div className="key-point text-center">
          <div className="key-point-icon">
            <i className="fas fa-star"></i>
          </div>
          <h4 className="key-point-title">Excellence in Everything We Do</h4>
          <p className="key-point-description">
            We aim for excellence in all aspects of our work, ensuring the
            highest quality and impact.
          </p>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle">Expert Developers</h5>
            <p className="key-point-description">
              Our team of skilled web developers is proficient in the latest
              technologies, including HTML5, CSS3, JavaScript, and popular
              frameworks like React, Angular, and Laravel.
            </p>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle">Client-Centric Approach</h5>
            <p className="key-point-description">
              We focus on delivering solutions that align with your business
              goals, ensuring a user-friendly and result-driven website.
            </p>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle">On-Time Delivery</h5>
            <p className="key-point-description">
              We adhere to strict deadlines and ensure timely delivery of all
              our web development projects.
            </p>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle">Scalable Solutions</h5>
            <p className="key-point-description">
              Our websites are built to grow with your business. Whether you
              need to add new features or scale up operations, we ensure your
              website can handle it.
            </p>
          </div>
          <div className="col-md-12 key-point">
            <h5 className="key-point-subtitle">SEO-Optimized</h5>
            <p className="key-point-description">
              We build websites that not only look great but are also optimized
              for search engines. We implement the best SEO practices to help
              your website rank higher in search results.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team-section container mt-5 p-4">
        <h2 className="about-subheading text-center mb-4">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img"
              />
              <h5 className="team-name">John Doe</h5>
              <p className="team-role">CEO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img"
              />
              <h5 className="team-name">Jane Smith</h5>
              <p className="team-role">CTO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img"
              />
              <h5 className="team-name">Bob Johnson</h5>
              <p className="team-role">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Row className="text-center mt-4">
          <Col>
            <p className="text-muted">
              Can't find what you're looking for?{" "}
              <NavLink to={"./contact"}>
                <Button>Contact us</Button>
              </NavLink>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
