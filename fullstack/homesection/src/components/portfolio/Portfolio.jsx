import "./Portfolio.css";
import { useEffect, useRef, useState } from "react";
import ProjectCards from "./ProjectCards";
import vid from '../../assets/videobgport3.mp4';

const Portfolio = () => {
  const videoRef = useRef(null);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },);

  return (
    <>
      {isLaptop ? (
        <div className="cont relative w-full">
          <div className="heading-containers">
            <video
              ref={videoRef}
              className="vid"
              src={vid}
              autoPlay
              loop={false}
              muted
              data-testid="blog-video"
            />
          </div>
        </div>
      ) : (
        /* Welcome text for smaller screens with animation */
        <div className="welcome-text">
          <span className="word-1">WELCOME</span>
          <span className="word-2">TO</span>
          <span className="word-3">OUR</span>
          <span className="word-4">PORTFOLIO</span>
        </div>
      )}
  
      <div className="portfolioimg">
        <h2 className="text-center project-title">Our Projects</h2>
        <ProjectCards />
      </div>
  
      <div style={{ backgroundColor: "white", height: "1px" }}></div>
    </>
  );
};

export default Portfolio;