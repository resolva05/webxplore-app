import React from 'react'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import vid from '../../../assets/vid.mp4'

const Service3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
             <video className="vid" src={vid} autoPlay loop muted/>
            <Container>
                {/* Header Section */}
                <Row className="my-5">
                    <Col md={12}>
                        <h1 className="text-center">Project Title</h1>
                        <p className="text-center">A brief overview of the project with highlights of its key points.</p>
                    </Col>
                </Row>

                {/* Description Section */}
                <Row className="my-5">
                    <Col md={6}>
                        <h2>Project Description</h2>
                        <p>
                            This section provides a detailed description of the project, including its objectives,
                            goals, and overall importance. It can include the project background, the problem it aims to solve,
                            and the potential impact on its users or stakeholders.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image
                            src="https://via.placeholder.com/500"
                            alt="Project Image"
                            rounded
                            fluid
                        />
                    </Col>
                </Row>

                <hr className="my-4"></hr>

                {/* Case Studies Section */}
                <Row className="my-5">
                    <Col md={12}>
                        <h2>Case Studies</h2>
                    </Col>

                    {/* Case Study 1 */}
                    <Col md={4} className="my-3">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                            <Card.Body>
                                <Card.Title>Case Study 1</Card.Title>
                                <Card.Text>
                                    This case study focuses on the project's successful implementation, challenges faced,
                                    and the outcomes. It provides real-world insights into how the project added value.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Case Study 2 */}
                    <Col md={4} className="my-3">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                            <Card.Body>
                                <Card.Title>Case Study 2</Card.Title>
                                <Card.Text>
                                    Another case study detailing a specific scenario where the project had a positive impact.
                                    It outlines the process, strategies used, and results obtained from the implementation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Case Study 3 */}
                    <Col md={4} className="my-3">
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                            <Card.Body>
                                <Card.Title>Case Study 3</Card.Title>
                                <Card.Text>
                                    A third case study that highlights innovative solutions developed within the project. It
                                    shows key decisions made, and lessons learned along the way.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Conclusion Section */}
                <Row className="my-5">
                    <Col md={12}>
                        <h2>Conclusion</h2>
                        <p>
                            In this section, wrap up the detailed page by summarizing the project's overall success, lessons
                            learned, and its potential for future development or applications.
                        </p>
                    </Col>
                </Row>
                <hr className="my-4"></hr>
            </Container>

            <div>
                <Container className="py-5">
                    {/* Section Heading */}
                    <Row className="text-center mb-4">
                        <Col lg={{ span: 8, offset: 2 }}>
                            <h1 className="display-4 font-weight-bold">Frequently Asked Questions</h1>
                            <p className="mt-3 text-muted">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
                            </p>
                        </Col>
                    </Row>

                    {/* FAQ Grid */}
                    <Row className="mt-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Col md={6} className="mb-4" key={i}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="h4">How do I get started?</Card.Title>
                                        <Card.Text className="mt-3 text-muted">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                                            iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {/* Contact Link */}
                    <Row className="text-center mt-4">
                        <Col>
                            <p className="text-muted">
                                Can't find what you're looking for?{' '}
                                <NavLink to={'./contact'} >
                                    <Button>Contact us</Button>
                                </NavLink>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Service3