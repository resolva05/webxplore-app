// import React from 'react'
import './Home.css';
import Services from './Services';
import Testimonials from './Testimonials';
import { animated, useSpring } from 'react-spring';
import { useState, useEffect } from 'react';
import KeyFeatures from './KeyFeatures';
import HeroSection from '../heroSection/HeroSection';
import './Home.css'
import logo from "../../assets/hcl.png"
import Homefaq from './Homefaq';
import Homecontact from './Homecontact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
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
      <Homefaq/>
      <Homecontact/>
      <div className="client-logo-section-container">
        <h2 className="client-logo-title">Our Clients</h2>
        <div className="client-logo-section">
          <img src={logo} alt="Client 1" className="client-logo" />
          <img src={logo} alt="Client 2" className="client-logo" />
          <img src={logo} alt="Client 3" className="client-logo" />
          <img src={logo} alt="Client 4" className="client-logo" />
          <img src={logo} alt="Client 5" className="client-logo" />
          <img src={logo} alt="Client 6" className="client-logo" />
          <img src={logo} alt="Client 7" className="client-logo" />
          <img src={logo} alt="Client 8" className="client-logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
