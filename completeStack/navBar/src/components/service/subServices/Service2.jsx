import React from "react";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
// import vid from "../../../assets/vid.mp4";
import S2faq from "./S2faq";
import "./Service2.css";
import Cards from "./Cards";
import s2 from "../../../assets/s2img.jpg";

const Service2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container>
        {/* Header Section */}
        <div>
          <Row className="my-5">
            <Col md={12}>
              <h1 className="text-center" style={{color:"black"}}>Mobile App Development</h1>
            </Col>
          </Row>

          {/* Description Section */}
          <Row className="my-5">
            <Col md={6}>
              <h2 style={{ color: "black" }}>Project Description</h2>
              <p>
                Elevate your business with custom mobile app solutions tailored
                to your needs. We specialize in iOS, Android, and cross-platform
                app development, ensuring seamless user experiences across all
                devices. From concept to launch, our expert team delivers
                innovative, scalable, and secure apps designed to enhance user
                engagement and drive business growth.
              </p>
            </Col>
            <Col md={6}>
              <Image src={s2} rounded fluid />
            </Col>
          </Row>
        </div>
        <Cards />
        <hr className="my-4"></hr>
      </Container>

      <div>
        <Container className="py-5">
          {/* Section Heading */}
          <Row className="text-center mb-4">
            <Col lg={{ span: 8, offset: 2 }}>
              <h1 className="display-4 font-weight-bold" style={{color:"black"}}>
                Frequently Asked Questions
              </h1>
              <p className="mt-3 text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, assumenda
              </p>
            </Col>
          </Row>

          <S2faq />
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

export default Service2;
