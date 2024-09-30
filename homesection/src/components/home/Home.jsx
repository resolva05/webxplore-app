// import React from 'react'
import './Home.css'
import Services from "./Services";
import Testimonials from "./Testimonials";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import KeyFeatures from "./KeyFeatures";
import HeroSection from "../heroSection/HeroSection";

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
    <>
        

          <animated.div style={props}>
            <HeroSection/>
          </animated.div>
        
        
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
    </>
  );
};

export default Home;