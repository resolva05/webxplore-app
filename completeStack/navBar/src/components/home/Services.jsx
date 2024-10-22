// import React from 'react'
import "./Services.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useRef } from "react";
import customweb from '../../assets/customweb.png'


const Services = () => {
  const carouselRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          carouselRef.current.classList.add("visible");
        } else {
          carouselRef.current.classList.remove("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);
  return (
    <div className="carousel-container   " ref={carouselRef} >
      <div className="text-center  servicediv" style={{ fontFamily: "sans-serif" }}>
          Services Overview
        </div>
      <Carousel id="myCarousel" data-bs-theme="dark">
        <Carousel.Item >
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto" style={{height:"650px"}}>
            <img
              src={customweb}
              alt="Custom web application"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="servicetext"
                style={{ fontSize: "25px" }}
              >
                Custom Web Applications Development
              </h1>
              <div
                className="text-container mx-auto "
                style={{
                  maxWidth: "70%",
                  padding: "10px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="servicedescription "
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    margin: "0",
                    marginBottom: "20px",
                  }}
                >
                  At WebXplore Studio, we specialize in developing secure and
                  scalable web applications meticulously tailored to align with
                  your unique business goals. Our custom web application
                  development services encompass a comprehensive range of
                  solutions, from initial concept design to full-scale
                  deployment and maintenance.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
       

        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto" style={{height:"650px"}}>
            <img
              src="https://media.istockphoto.com/id/1273058761/vector/tiny-people-testing-quality-assurance-in-software.jpg?s=612x612&w=0&k=20&c=DsNlOqfMpPkHlVEavkrz8atzgOxVSRgZPkGHYH-e1-8="
              alt="Prototype Services"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="servicetext"
                style={{ fontSize: "25px" }}
              >
                Prototype Services
              </h1>
              <div
                className="text-container mx-auto"
                style={{
                  maxWidth: "70%",
                  padding: "10px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="servicedescription"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    margin: "0",
                    marginBottom: "20px",
                  }}
                >
                  Bringing your vision to life starts with a solid prototype,
                  and at WebXplore Studio, our experienced UX designers excel in
                  crafting detailed models that accurately reflect your user
                  requirements. Our prototype services are designed to bridge
                  the gap between your ideas and the final product, ensuring
                  that every aspect of your web application or mobile app is
                  thoughtfully planned and executed.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto"style={{height:"650px"}}>
            <img
              src="https://www.extwebtech.com/wp-content/uploads/2023/01/Full_stack_developer-1024x507.webp"
              alt="Full Stack Development"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="servicetext"
                style={{ fontSize: "25px" }}
              >
                Full Stack Development
              </h1>
              <div
                className="text-container mx-auto"
                style={{
                  maxWidth: "70%",
                  padding: "10px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="servicedescription"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    margin: "0",
                    marginBottom: "20px",
                  }}
                >
                  Our Full Stack Development services at WebXplore Studio
                  encompass both frontend and backend development, providing a
                  seamless and integrated approach to building comprehensive web
                  applications. We are proficient in a variety of technologies
                  and frameworks, including MEAN (MongoDB, Express.js, Angular,
                  Node.js), MERN (MongoDB, Express.js, React, Node.js), PHP,
                  .NET, and more, allowing us to choose the best stack tailored
                  to your project’s requirements.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* Additional Carousel.Items here */}
        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto" style={{height:"650px"}}>
            <img
              src="https://shastatek.com/sites/default/files/3party_api.jpg"
              alt="Third Party Integration"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="servicetext"
                style={{ fontSize: "25px" }}
              >
                Third Party Integration
              </h1>
              <div
                className="text-container mx-auto"
                style={{
                  maxWidth: "70%",
                  padding: "10px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="servicedescription"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    margin: "0",
                    marginBottom: "20px",
                  }}
                >
                  In today’s interconnected digital landscape, integrating
                  third-party services is essential for enhancing the
                  functionality and user experience of your web applications. At
                  WebXplore Studio, our Third Party Integration services focus
                  on creating seamless connections between your web applications
                  and external platforms, APIs, and data sources.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto"style={{height:"650px"}}>
            <img
              src="https://cdn-bbaid.nitrocdn.com/wYFmIWkSNKpdInpiRfVoEqTErZtkFjBo/assets/images/optimized/rev-ff73c2b/www.rishabhsoft.com/wp-content/uploads/2022/03/Software-Product-Development-Strategy_Banner.jpg"
              alt="Software Product Development"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="servicetext"
                style={{ fontSize: "25px" }}
              >
                Software Product Development
              </h1>
              <div
                className="text-container mx-auto"
                style={{
                  maxWidth: "70%",
                  padding: "10px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="servicedescription"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    margin: "0",
                    marginBottom: "20px",
                  }}
                >
                  At WebXplore Studio, we offer comprehensive Software Product
                  Development services designed to transform your innovative
                  ideas into market-ready products. Our team combines technical
                  expertise with industry knowledge to deliver software
                  solutions that are not only functional but also secure and
                  user-centric.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto" style={{height:"650px"}}>
            <img
              src="https://media.istockphoto.com/id/1212446148/photo/update-with-blurred-city-lights.jpg?s=612x612&w=0&k=20&c=w5GES6fFoPkAYqBSFX5f-wjpkelJtdzpXif7Cic53q8="
              alt="Upgradation Services"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="servicetext"
                style={{ fontSize: "25px" }}
              >
                Upgradation Services
              </h1>
              <div
                className="text-container mx-auto"
                style={{
                  maxWidth: "70%",
                  padding: "10px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="servicedescription"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    margin: "0",
                    marginBottom: "20px",
                  }}
                >
                  Keeping your web technologies up-to-date is crucial for
                  maintaining performance, security, and user satisfaction. At
                  WebXplore Studio, our Upgradation Services are designed to
                  revitalize your existing websites and applications by
                  upgrading outdated technologies and migrating to new, more
                  efficient platforms.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto" style={{height:"650px"}}>
            <img
              src="https://www.shutterstock.com/image-photo/analyst-uses-computer-dashboard-data-600nw-2285412737.jpg"
              alt="Consulting and Business Analysis"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="servicetext"
                style={{ fontSize: "25px" }}
              >
                Consulting and Business Analysis
              </h1>
              <div
                className="text-container mx-auto"
                style={{
                  maxWidth: "70%",
                  padding: "10px",
                  borderRadius: "10px",
                  boxSizing: "border-box",
                }}
              >
                <p
                  className="servicedescription"
                  style={{
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    margin: "0",
                    marginBottom: "20px",
                  }}
                >
                  Navigating the complexities of web development projects
                  requires expert guidance and strategic planning. At WebXplore
                  Studio, our Consulting and Business Analysis services provide
                  you with the insights and direction needed to make informed
                  decisions and achieve your business objectives.Our experienced
                  consultants work closely with you to understand your business
                  model, goals, and challenges.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Services;
