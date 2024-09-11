// import React from 'react'
import logo from "../../assets/logo.jpg";
import blank from "../../assets/blank.jpg";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="display-4 text-danger">
              Welcome to Resolva Insights!
            </h1>
            <p className="lead">
              Your Business, Our Expertise, Infinite Possibilities....
            </p>
            <p>
              In todays fast-paced world, businesses need to make smarter and
              faster decisions. AI-driven decision-making systems leverage
              advanced technologies like machine learning and predictive
              analytics to transform data into actionable insights. By
              automating complex decisions and analyzing vast amounts of data in
              real-time, these systems are revolutionizing business strategies,
              driving innovation, and boosting operational efficiency. Embrace
              AI-driven decision-making to stay ahead of the competition and
              unlock new opportunities for growth!
            </p>
            <a className="btn btn-outline-danger" href="#" role="button">
              About Us
            </a>
          </div>
          <img
            src={logo}
            alt=""
            className="img-fluid ml-4 shadow-lg"
            style={{
              height: "300px",
              marginRight: "20px",
              marginBottom: "50px",
              borderRadius: "15px",
            }}
          />
        </div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 shadow-lg"
              src={blank}
              alt="First slide"
              style={{height:"500px", borderRadius: "15px"}}
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 shadow-lg"
              src={blank}
              alt="Second slide"
              style={{height:"500px", borderRadius: "15px"}}
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 shadow-lg"
              src={blank}
              alt="Third slide"
              style={{height:"500px", borderRadius: "15px"}}
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
