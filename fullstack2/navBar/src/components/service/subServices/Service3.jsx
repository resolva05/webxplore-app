import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import vid from "../../../assets/vid.mp4";
import OtherServicesCards from "./OtherServicesCards";
import otherimg from '../../../assets/otherservices.png'
import S3faq from "./S3faq";

const Service3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <video className="vid" src={vid} autoPlay loop muted />
      <Container>
        {/* Header Section */}
        <Row className="my-5">
          <Col md={12}>
            <h1 className="text-center" style={{color:"black"}}>Other Services</h1>
            <p className="text-center">
              A brief overview of the project with highlights of its key points.
            </p>
          </Col>
        </Row>

        {/* Description Section */}
        <Row className="my-5">
          <Col md={6}>
            <h2 style={{color:"black"}}>Project Description</h2>
            <p>
              This section provides a detailed description of the project,
              including its objectives, goals, and overall importance. It can
              include the project background, the problem it aims to solve, and
              the potential impact on its users or stakeholders.
            </p>
          </Col>
          <Col md={5}>
            <Image
              src={otherimg}
              alt="Project Image"
              rounded
              fluid
            />
          </Col>
        </Row>

        <hr className="my-4"></hr>

        <OtherServicesCards/>
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
            </Col>
          </Row>
          <S3faq/>
          {/* FAQ Grid */}
          {/* <Row className="mt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Col md={6} className="mb-4" key={i}>
                <Card>
                  <Card.Body>
                    <Card.Title className="h4">
                      How do I get started?
                    </Card.Title>
                    <Card.Text className="mt-3 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat aliquam adipisci iusto aperiam? Sint asperiores
                      sequi nobis inventore ratione deleniti?
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}

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

export default Service3;
