import React from "react";
import { FaRocket, FaLightbulb, FaCog } from "react-icons/fa";
import { Container, Row, Col, Card } from "react-bootstrap";
import './Testimon.css'

const KeyFeatures = () => {
  const features = [
    {
      title: "Reasonable Pricing",
      description:
        "We offer competitive and transparent pricing structures tailored to fit your budget without compromising on quality. Our flexible pricing models ensure that you receive maximum value for your investment.",
      icon: FaRocket,
    },
    {
      title: "Business-Specific Web Development",
      description:
        "Our solutions are customized to address the unique challenges and requirements of your business. We take the time to understand your industry, target audience, and specific needs to deliver a product that truly supports your business goals.",
      icon: FaLightbulb,
    },
    {
      title: "Integration of Latest Trends and Expertise",
      description:
        "We stay abreast of the latest industry trends and technological advancements to incorporate cutting-edge features and best practices into your projects. Our team’s expertise ensures that your website or application is modern, efficient, and future-proof.",
      icon: FaCog,
    },
  ];

  return (
    <div>
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5" style={{ color: "black" }}>
            Key Features
          </h2>
          <Row>
            {features.map((feature, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="h-100 text-center shadow-lg border-0 crd " style={{borderRadius:"20px"}}>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <feature.icon
                      className="text-primary mb-3"
                      style={{ fontSize: "3rem" }}
                    />
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default KeyFeatures;
