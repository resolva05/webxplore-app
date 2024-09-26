import React from "react";
import "./CaseStudy.css";
import { Card, Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import myPDF from "../../assets/cs1.pdf"; // Import your PDF

const CaseStudy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const openPDF = (e) => {
    e.preventDefault();
    window.open(myPDF, "_blank"); // Opens the imported PDF in a new tab
  };

  return (
    <>
    <p className="text-center" style={{marginTop:"5vh"}}> <h1>Our Case Studies </h1></p>
    <div style={{marginTop:"-8vh"}}>
      <Container fluid className="d-flex justify-content-center mt-5" >
        <Card
          ref={ref}
          className={`full-width-card ${inView ? "animate-card" : ""}`}
        >
          <NavLink to="#" onClick={openPDF} className="nav-link">
            <Card.Body
              className={`card-body-content ${inView ? "animate-text" : ""}` }
            >

              <Card.Text className="card-text">
                <b> Case Study:</b> AI-Powered Chatbots for Real-Time Customer
                Support for Resolva Insights Private Limited <br />
                <p className="text-center maintext">
                  <b>Overview</b>
                </p>
                <p className="maintext" style={{ marginTop: "-2vh" }} >
                  Resolva Insights Private Limited, a market research and
                  consulting firm, specializes in providing data-driven
                  insights, market analysis, and strategic guidance to
                  businesses across various industries. As their client base
                  grew, they faced challenges in scaling customer support
                  efficiently while maintaining a high level of service.
                </p>
              </Card.Text>
            </Card.Body>
          </NavLink>
        </Card>
      </Container>
    </div>
    </>
  );
};

export default CaseStudy;
