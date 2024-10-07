// import React from 'react'
import './Home.css'
import Services from "./Services";
import Testimonials from "./Testimonials";
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
import KeyFeatures from "./KeyFeatures";
import HeroSection from "../heroSection/HeroSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
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
        <HeroSection />
      </animated.div>
      <Services />
      <div>
        <KeyFeatures />
      </div>
      
      <div>
        <Testimonials />
      </div>
    </>
  );
};

export default Home;