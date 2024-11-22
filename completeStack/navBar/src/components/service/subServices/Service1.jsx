import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "../subServices/Service1.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import S1faq from "./S1faq.jsx";
import web1 from "../../../assets/webimg1.jpg";
import { FaCode, FaShoppingCart, FaMobileAlt, FaFileAlt, FaPlug, FaDesktop } from "react-icons/fa"; // Add icons
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
        {/* Web Development Services Section */}
        <div className="webservice">
          <h2
            style={{
              color: "#2c3e50",
              marginBottom: "40px",
              textAlign: "center",
              fontFamily: "Arial",
              fontSize: "2.2rem",
            }}
          >
            Our Web Development Services
          </h2>

          <div className="text-center mt-5">
            <p
              style={{
                color: "#7f8c8d",
                fontSize: "1rem",
                fontFamily: "Arial",
                lineHeight: "1.6",
                marginTop: "-30px",
              }}
            >
              At WebXplore Studio, we specialize in providing a wide range of web development services that help businesses establish a strong online presence. Whether you're looking for a simple website or a complex web application, we offer tailored solutions that prioritize both functionality and user experience. Our team is committed to delivering high-quality services with the latest technologies, ensuring your website not only looks great but performs optimally on all devices.
            </p>
          </div>

          <Row>
            {[
              {
                title: "Custom Website Development",
                description:
                  "We build custom websites tailored to your specific business needs. From small business websites to complex enterprise solutions, we deliver unique and scalable websites that are optimized for performance and security.",
                icon: <FaCode size={40} />,
              },
              {
                title: "eCommerce Development",
                description:
                  "Launch your online store with our robust eCommerce solutions. We develop secure, scalable, and easy-to-manage eCommerce websites using platforms like Shopify, WooCommerce, and Magento.",
                icon: <FaShoppingCart size={40} />,
              },
              {
                title: "Responsive Web Design",
                description:
                  "Ensure your website looks great on all devices with our responsive web design services. We create websites that automatically adjust to any screen size, offering a seamless experience across desktops, tablets, and smartphones.",
                icon: <FaMobileAlt size={40} />,
              },
              {
                title: "CMS Development",
                description:
                  "Manage your website content effortlessly with our custom CMS (Content Management System) development services. Whether you need WordPress, Joomla, or a custom CMS solution, we ensure your website is easy to update without technical expertise.",
                icon: <FaFileAlt size={40} />,
              },
              {
                title: "Progressive Web Apps (PWA)",
                description:
                  "Enhance user experience with Progressive Web Apps that combine the best of web and mobile applications. PWAs offer fast loading times, offline capabilities, and native app-like experiences on any device.",
                icon: <FaPlug size={40} />,
              },
              {
                title: "Single Page Applications (SPA)",
                description:
                  "SPAs provide dynamic interactions on a single page, improving performance and user experience. We specialize in frameworks like React, Angular, and Vue.js to build fast and responsive single-page applications.",
                icon: <FaDesktop size={40} />,
              },
            ].map((service, index) => (
              <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                <Card className="service-card">
                  <Card.Body>
                    <div className="text-center mb-3">
                      <div className="service-icon">{service.icon}</div>
                    </div>
                    <Card.Title
                      className="text-center"
                      style={{ color: "#2c3e50", fontWeight: "400" }}
                    >
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-muted">{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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
