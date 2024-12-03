import "./Portfolio.css";
import { useEffect, useRef, useState } from "react";
import ProjectCards from "./ProjectCards";
import vid from '../../assets/videobgport3.mp4';

const Portfolio = () => {
  const videoRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (!videoRef.current) return;

      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";
      const scrollSpeed = Math.abs(currentScrollY - lastScrollY) / 100;

      if (scrollDirection === "down") {
        videoRef.current.currentTime = Math.max(
          videoRef.current.currentTime - scrollSpeed,
          0
        );
      } else {
        videoRef.current.currentTime = Math.min(
          videoRef.current.currentTime + scrollSpeed,
          videoRef.current.duration
        );
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

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