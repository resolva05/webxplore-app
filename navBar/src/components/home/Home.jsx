// import React from 'react'
import logo from "../../assets/logo.jpg";
import './Home.css'
import Services from "./Services";
import Testimonials from "./Testimonials";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import bg from '../../assets/heroVideo.mp4'
import { NavLink } from "react-router-dom";
import KeyFeatures from "./KeyFeatures";

const Home = () => {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    reverse: flip,
    delay: 600,
    onRest: () => setFlip(flip),
  });
  return (
    <div>
      <div className="jumbotron">
        <div className="main">
          <div className="video-background">
            <video src={bg} autoPlay loop muted></video>
          </div>

          <animated.div style={props}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="display-4 text-danger">
                  Welcome to WebXplore Studios!
                </h1>
                <p className="lead">
                  Your Business, Our Expertise, Infinite Possibilities....
                </p>
                <img
                  src={logo}
                  alt=""
                  className="img-fluid ml-4 shadow-lg"
                  style={{
                    marginRight: "20px",
                    marginBottom: "50px",
                    borderRadius: "15px",
                  }}
                />
                <p className="text-slide">
                  In todays fast-paced world, businesses need to make smarter and
                  faster decisions. AI-driven decision-making systems leverage advanced
                  technologies like machine learning and predictive analytics to
                  transform data into actionable insights. By nt quaerat... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eum molestiae alias consequatur veniam necessitatibus excepturi nostrum molestias omnis pariatur assumenda impedit quidem, voluptatum eveniet suscipit, fugit accusamus sapiente voluptatibus.
                </p>
              </div>
            </div>
            <NavLink to={'./blogpage'}>
              <button className="btn blog-btn"> Blog Page </button>
            </NavLink>
          </animated.div>
        </div>
        <hr className="my-4"></hr>
        <div className="text-center  fs-1" style={{ fontFamily: "sans-serif" }}>
          Services Overview
        </div>
        <Services />
        <hr className="my-4"></hr>
        <br />

        <div>
          <KeyFeatures/>
        </div>
        <hr className="my-4"></hr>
        <div
          className="text-center  fs-1 mb-4"
          style={{ fontFamily: "sans-serif" }}
        >
          Clients testimonials
        </div>
        <div>
          <Testimonials />
        </div>
        <hr className="my-4"></hr>
      </div>
    </div>

  );
};

export default Home;