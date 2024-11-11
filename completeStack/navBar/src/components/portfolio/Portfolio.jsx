import "./Portfolio.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../home/Testimon.css";
import ProjectCards from "./ProjectCards";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  const [open, setOpen] = useState(false);
 

  return (
    <>
      <div className=" cont relative w-full port">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 d-flex">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1
              className="headingport"
            >
              Delivering cutting-edge solutions
            </h1>
            <p className="ptagtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur modi blanditiis dolores quasi eaque explicabo!Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Consequatur
              modi blanditiis dolores quasi eaque explicabo!Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consequatur modi blanditiis
              dolores quasi eaque explicabo!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Consequatur modi blanditiis dolores
              quasi eaque explicabo!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur modi blanditiis dolores quasi eaque
              explicabo!
            </p>
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <Button
                  className="btn"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  style={{
                    marginBottom: "10px",
                    borderRadius: "25px",
                  }}
                >
                  Know More
                </Button>
                <div style={{ minHeight: "150px", width: "100%" }}>
                  <Collapse in={open} dimension="height">
                    <div id="example-collapse-text">
                      <Card
                        body
                        style={{
                          width: "60%",
                          maxWidth: "60%",
                          minWidth: "250px",
                          height: "auto",
                          backgroundColor: "white",
                          marginBottom: "10px",
                        }}
                      >
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </Card>
                    </div>
                  </Collapse>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="portfolioimg">
        <h2
          className="text-center"
          style={{
           
            color: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          Our Projects
        </h2>
          <ProjectCards/>
      </div>

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
      <div style={{ backgroundColor: "white", height: "1px" }}></div>
    </>
  );
};

export default Portfolio;
