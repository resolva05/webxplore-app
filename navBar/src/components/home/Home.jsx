// import React from 'react'
import logo from "../../assets/logo.jpg";
import './Home.css'
import Services from "./Services";
import Testimonials from "./Testimonials";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import bg from '../../assets/b.mp4'

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
        {/* <div className="main ">
        <video src={bg} autoPlay loop muted ></video>
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
              faster decisions. AI-driven decision-making systems leverage
              advanced technologies like machine learning and predictive
              analytics to transform data into actionable insights. By
              nt quaerat. Mollitia autem possimus iste labore! Doloremque minus enim reprehenderit, non nihil alias porro aliquid dolore, cum, soluta deserunt eaque.
              Magni commodi quidem, odit quod nihil quae earum, dolor iusto autem beatae nam. Nemo in veritatis quam maiores iste eaque, voluptatum laudantium nesciunt cumque minus! Quam sint doloremque non maxime.
              Similique nobis explicabo doloribus sint magnam autem dolorum ab blanditiis dicta aperiam id, saepe non minima odio architecto repudiandae eius sed eligendi suscipit est consectetur odit possimus? Cupiditate, unde dignissimos.
              Vero ipsum magni corrupti, ipsa animi harum cum expedita tenetur illum reiciendis qui maxime soluta impedit amet officiis temporibus enim a? Minus aliquam, nulla quibusdam nobis excepturi rem sunt itaque.
            </p>
          </div>
          
        </div>
      </animated.div>
      </div> */}
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
                  In today's fast-paced world, businesses need to make smarter and
                  faster decisions. AI-driven decision-making systems leverage advanced
                  technologies like machine learning and predictive analytics to
                  transform data into actionable insights. By nt quaerat... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eum molestiae alias consequatur veniam necessitatibus excepturi nostrum molestias omnis pariatur assumenda impedit quidem, voluptatum eveniet suscipit, fugit accusamus sapiente voluptatibus.
                </p>
              </div>
            </div>
          </animated.div>
        </div>


        <hr className="my-4"></hr>
        <div className="text-center  fs-1" style={{ fontFamily: "sans-serif" }}>
          Services Overview
        </div>
        <Services />
        <hr className="my-4"></hr>
        <br />
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
