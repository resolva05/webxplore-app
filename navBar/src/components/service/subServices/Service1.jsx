import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "../subServices/Service1.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import S1faq from "./S1faq.jsx";
import web1 from "../../../assets/webimg1.jpg";

const AnimatedText = ({ text }) => {
  const words = text.split(" ");

  return (
    <p>
      {words.map((word, index) => (
        <span
          key={index}
          className="word"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {word}
          &nbsp; {/* Space between words */}
        </span>
      ))}
    </p>
  );
};

const Service1 = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  return (
    <div>
      <Container>
        {/* Header Section */}
        <Row className="my-5">
          <Col md={12}>
            <h1 className="text-center" style={{ color: "black" }}>Web Development Services</h1>
            <p className="text-center" >
              A brief overview of the project with highlights of its key points.
            </p>
          </Col>
        </Row>

        {/* Description Section */}
        <Row className="my-5">
          <Col md={6}>
            <h2 style={{ color: "black" }} className="fade-in-left">
              Project Description
            </h2>
            <p className="fade-in-left">
              At WebXplore Studio, we offer cutting-edge web development
              services tailored to meet your business needs. Our team of
              experienced developers and designers deliver high-performance,
              scalable, and visually appealing websites that boost user
              engagement and drive business growth.
            </p>
          </Col>
          <Col md={6}>
            <Image src={web1} alt="Project Image" rounded fluid />
          </Col>
        </Row>
        <hr className="my-4"></hr>
        <div>
          <h2 style={{ color: "black", marginBottom: "40px" }}>
            Our Web Development Services
          </h2>

          <h4 style={{ color: "black" }}>1. Custom Website Development</h4>
          <p>
            We build custom websites tailored to your specific business needs.
            From small business websites to complex enterprise solutions, we
            deliver unique and scalable websites that are optimized for
            performance and security.
          </p>

          <h4 style={{ color: "black" }}>2. eCommerce Development</h4>
          <p>
            Launch your online store with our robust eCommerce solutions. We
            develop secure, scalable, and easy-to-manage eCommerce websites
            using platforms like Shopify, WooCommerce, and Magento.
          </p>

          <h4 style={{ color: "black" }}>3. Responsive Web Design</h4>
          <p>
            Ensure your website looks great on all devices with our responsive
            web design services. We create websites that automatically adjust to
            any screen size, offering a seamless experience across desktops,
            tablets, and smartphones.
          </p>

          <h4 style={{ color: "black" }}>4. CMS Development</h4>
          <p>
            Manage your website content effortlessly with our custom CMS
            (Content Management System) development services. Whether you need
            WordPress, Joomla, or a custom CMS solution, we ensure your website
            is easy to update without technical expertise.
          </p>

          <h4 style={{ color: "black" }}>5. Progressive Web Apps (PWA)</h4>
          <p>
            Enhance user experience with Progressive Web Apps that combine the
            best of web and mobile applications. PWAs offer fast loading times,
            offline capabilities, and native app-like experiences on any device.
          </p>

          <h4 style={{ color: "black" }}>
            6. Single Page Applications (SPA)
          </h4>
          <p>
            SPAs provide dynamic interactions on a single page, improving
            performance and user experience. We specialize in frameworks like
            React, Angular, and Vue.js to build fast and responsive single-page
            applications.
          </p>

          <h4 style={{ color: "black" }}>7. API Integration & Development</h4>
          <p>
            Seamlessly connect your website to third-party services with our API
            integration services. We also develop custom APIs to enhance your
            website’s functionality and communication with other platforms.
          </p>

          <h4 style={{ color: "black" }}>8. Website Maintenance & Support</h4>
          <p>
            Keep your website running smoothly with our ongoing maintenance and
            support services. We handle updates, security patches, backups, and
            performance monitoring to ensure your website operates without
            interruption.
          </p>
        </div>

        {/* </Col>
        </Row> */}

        <hr className="my-4"></hr>
      </Container>

      <div>
        <Container className="py-5">
          {/* Section Heading */}
          <Row className="text-center mb-4">
            <Col lg={{ span: 8, offset: 2 }}>
              <h1 className="display-4 font-weight-bold" style={{ color: "black" }}>
                Frequently Asked Questions
              </h1>
              <p className="mt-3 text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, assumenda
              </p>
            </Col>
          </Row>

          <S1faq />

          {/* Contact Link */}
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
        </Container>
      </div>
    </div>
  );
};

export default Service1;
