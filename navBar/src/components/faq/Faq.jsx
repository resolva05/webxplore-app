import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import { Row, Col, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import vid from '../../assets/vid.mp4';

const Faq = () => {
    useEffect(() => {
        window.scrollTo(top);
    }, []);
    return (
        <div style={{ marginTop: "20px" }}>
             <video className="vid" src={vid} autoPlay loop muted/>
            <div>
                <Row className="text-center mb-4" style={{width:"100%"}}>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <h1 className="display-4 font-weight-bold" style={{ color: "black" }}>Frequently Asked Questions</h1>
                        <p className="mt-3 text-muted">
                            Welcome to our FAQ page, your one-stop resource for answers to commonly asked questions. <br />
                            <b>Whether you're a new customer looking to learn more about what we offer or a long-time user seeking clarification on specific topics, this page has clear and concise information about our products and services.</b>
                        </p>
                    </Col>
                </Row>
                <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
                    <MDBAccordion alwaysOpen initialActive={0}>
                        <MDBAccordionItem collapseId={1} headerTitle="What industries do you serve?" style={{ marginBottom: "20px", border: "2px solid grey" }}>
                            We have experience working across various industries including:
                            <br />  •	E-commerce <br />
                            •	Healthcare <br />
                            •	Education<br />
                            •	Real Estate<br />
                            •	Travel and Hospitality<br />
                            •	Finance and Fintech<br />
                            •	Entertainment and Media<br />
                            •	Others

                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle="What is the process for starting a project?" style={{ border: "2px solid grey", marginBottom: "20px" }}>
                            We follow a streamlined process:
                            <br />        •	Initial Consultation: We discuss your project requirements, goals, and budget.<br />
                            •	Proposal & Planning: We create a proposal outlining the timeline, cost, and project plan.<br />
                            •	Development: Our team builds the solution using the best technologies and practices.<br />
                            •	Testing: We thoroughly test the solution for functionality, security, and performance.<br />
                            •	Launch & Support: After launch, we provide ongoing support and maintenance.

                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle="Do you sign NDAs (Non-Disclosure Agreements)?" style={{ border: "2px solid grey", marginBottom: "20px" }}>
                            <strong>Yes</strong>, we sign NDAs to ensure complete confidentiality of your project and protect your intellectual property.
                        </MDBAccordionItem>

                        <MDBAccordionItem collapseId={4} headerTitle="How do you ensure quality and security" style={{ border: "2px solid grey", marginBottom: "20px" }}>
                            We follow a rigorous testing process to identify and fix any bugs or security vulnerabilities. We also implement best practices for security, including data encryption, secure coding standards, and SSL integration.
                        </MDBAccordionItem>

                        <MDBAccordionItem collapseId={5} headerTitle="Do you offer ongoing support after the project is completed?" style={{ border: "2px solid grey", marginBottom: "20px" }}>
                            <strong>Yes</strong>, we offer various support packages for ongoing maintenance, updates, and security monitoring after project completion.
                        </MDBAccordionItem>

                    </MDBAccordion>
                </MDBContainer>
                <hr className="my-4"></hr>
                <div className='text-center d-flex justify-content-center' >
                    <div  style={{marginBottom:"10px", marginTop:"7px"}}>
                        Can't find what you are looking for? 
                    </div>
                    <Button style={{marginBottom:"20px", marginLeft:"10px"}}>Contact Us</Button>
                </div>
            </div>

        </div>
    )
}

export default Faq;