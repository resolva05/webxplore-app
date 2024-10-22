import React from "react";
import { useEffect, useRef } from "react";
import "./AboutUs.css";

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
      <header className="about-header text-center" >
        <h1 className="about-main-heading" style={{color:"white"}}>About Us</h1>
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
            <h2 className="about-subheading mb-3" style={{color:"black"}}>Who We Are</h2>
            <p className="about-description">
              We are a dynamic and innovative company that specializes in
              delivering top-notch services and solutions to clients around the
              globe. Our team is passionate, driven, and committed to helping
              businesses thrive in a digital-first world.
            </p>
            <h2 className="about-subheading mb-3" style={{color:"black"}}>Our Mission</h2>
            <p className="about-description">
              Our mission is to provide cutting-edge technologies, customized
              solutions, and exceptional service that empowers our clients to
              achieve their business goals and exceed expectations.
            </p>
            <button className="btn btn-primary about-btn">Discover More</button>
          </div>
        </div>
      </div>

      {/* Key Points Section */}
      <div className="key-points-section container mt-5 p-4" ref={keyPointsRef}>
        <h2 className="about-subheading text-center mb-4"style={{color:"black"}}>Our Core Values</h2>
        <div className="key-point text-center">
          <div className="key-point-icon">
            <i className="fas fa-star" style={{color:"black"}}></i>
          </div>
          <h4 className="key-point-title">Excellence in Everything We Do</h4>
          <p className="key-point-description">
            We aim for excellence in all aspects of our work, ensuring the
            highest quality and impact.
          </p>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle"style={{color:"black"}}>Innovation</h5>
            <p className="key-point-description">
              We foster a culture of creativity and continuous improvement.
            </p>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle"style={{color:"black"}}>Integrity</h5>
            <p className="key-point-description">
              We act with honesty, transparency, and accountability.
            </p>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle"style={{color:"black"}}>Collaboration</h5>
            <p className="key-point-description">
              We believe in the power of teamwork and open communication.
            </p>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle"style={{color:"black"}}>Customer Focus</h5>
            <p className="key-point-description">
              We put our clients needs at the center of everything we do.
            </p>
          </div>
          <div className="col-md-12 key-point">
            <h5 className="key-point-subtitle"style={{color:"black"}}>Sustainability</h5>
            <p className="key-point-description">
              We are committed to long-term solutions that are good for business
              and the planet.
            </p>
          </div>
          <h2 className="about-subheading text-center mb-4" style={{color:"black"}}>What We Do?</h2>
        <div className="key-point text-center">
          <h4 className="key-point-title">Core Services:</h4>
        </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle" style={{marginTop:"10px", color:"black"}}>•	Web Development</h5>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle"style={{marginTop:"10px", color:"black"}}>•	Mobile App Development</h5>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle"style={{marginTop:"10px", color:"black"}}>•	SEO</h5>
          </div>
          <div className="col-md-6 key-point">
            <h5 className="key-point-subtitle"style={{marginTop:"10px", color:"black"}}>•	Social Media Marketing</h5>
          </div>
          <div className="col-md-12 key-point">
            <h5 className="key-point-subtitle"style={{marginTop:"10px", color:"black"}}>•	Payment Gateway Integration</h5>
          </div>
          <div className="col-md-12 key-point">
            <h5 className="key-point-subtitle"style={{marginTop:"10px", color:"black"}}>•	AI integration</h5>
          </div>
        </div>
      </div>

    

      {/* Team Section */}
      <div className="about-team-section container mt-5 p-4">
        <h2 className="about-subheading text-center mb-4"style={{color:"black"}}>Meet Our Team</h2>
        <div className="row text-center member justify-content-center">
          <div className="col-md-4">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img"
              />
              <h5 className="team-name">Karishma Sirsat</h5>
              <p className="team-role">Director / Managing Director (MD)</p>
              <p className="team-role">karishma@resolvainsights.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img"
              />
              <h5 className="team-name">Mayur Thorat </h5>
              <p className="team-role">CEO</p>
              <p className="team-role">mayur@resolvainsights.com</p>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="team-card">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                alt="Team Member"
                className="img-fluid team-img"
              />
              <h5 className="team-name">Bob Johnson</h5>
              <p className="team-role">Project Manager</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
