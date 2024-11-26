// // import React from 'react'
// import "./Services.css";
// import Carousel from "react-bootstrap/Carousel";
// import { useEffect, useRef } from "react";
// import customweb from "../../assets/customweb.png";
// import prototypeimg from "../../assets/prototype.png"
// import fullstackimg from "../../assets/fullstackimg.png"
// import swdev from "../../assets/swdev.png"
// import thirdparty from "../../assets/thirdparty.png"
// import upgrade from "../../assets/upgradeimg.png"
// import ba from "../../assets/ba.png"
// import { useInView } from "react-intersection-observer";
// import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";

// const Services = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.2// Trigger when 20% of the card is visible
//   });
//   const carouselRef = useRef(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           carouselRef.current.classList.add("visible");
//         } else {
//           carouselRef.current.classList.remove("visible");
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (carouselRef.current) {
//       observer.observe(carouselRef.current);
//     }

//     return () => {
//       if (carouselRef.current) {
//         observer.unobserve(carouselRef.current);
//       }
//     };
//   }, []);
//   return (
//     <div className="carousel-container   " ref={carouselRef}>
//       <div
//         className="text-center  servicediv"
//         style={{ fontFamily: "sans-serif" }}
//       >
//         Services Overview
//       </div>
//       <Carousel id="myCarousel">
//         <Carousel.Item>
//           <Container fluid className="d-flex justify-content-center mt-5">
//             <Row className="w-100">
//               <Col>
//                 <Card
//                   // ref={ref}
//                   className={`full-width-card ${!inView ? "animate-card" : ""}`}
//                   style={{ marginRight: "10%", marginLeft: "10%", marginBottom: "15vh" }}
//                 >
//                   <Row noGutters>
//                     <Col md={5} className="card-image-section">
//                       <img
//                         src={customweb}
//                         alt="Custom web application"
//                         className="img-fluid w-full h-auto rounded-md object-cover mt-2"
//                         style={{
//                           borderRadius: "15px",
//                           maxHeight: "360px",
//                           marginBottom: "10px",
//                         }}
//                       />
//                     </Col>

//                     <Col md={7}>
//                       <Card.Body
//                         className={`card-body-content ${!inView ? "animate-text" : ""}`}
//                       >
//                         {/* Responsive Title */}
//                         <Card.Title
//                           className="cardtitle text-center"
//                           style={{
//                             fontSize: "calc(1.6rem + 0.5vw)", // Responsive font size
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Custom Web Applications Development
//                         </Card.Title>

//                         {/* Responsive Text */}
//                         <Card.Text
//                           className="card-text"
//                           style={{
//                             fontSize: "calc(1rem + 0.3vw)", // Responsive font size
//                             marginTop: "20px",
//                           }}
//                         >
//                           At WebXplore Studio, we specialize in developing secure and
//                           scalable web applications meticulously tailored to align with
//                           your unique business goals. Our custom web application
//                           development services encompass a comprehensive range of
//                           solutions, from initial concept design to full-scale
//                           deployment and maintenance.
//                         </Card.Text>
//                       </Card.Body>
//                     </Col>
//                   </Row>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </Carousel.Item>

//         <Carousel.Item>
//   <Container fluid className="d-flex justify-content-center mt-5">
//     <Row className="w-100">
//       <Col>
//         <Card
//           ref={ref}
//           className={`full-width-card ${!inView ? "animate-card" : ""}`}
//           style={{ marginRight: "10%", marginLeft: "10%", marginBottom:"15vh" }}
//         >
//           <Row noGutters>
//             <Col md={5} className="card-image-section">
//               <img
//                 src={prototypeimg}
//                 alt="Custom web application"
//                 className="img-fluid w-full h-auto rounded-md object-cover mt-2"
//                 style={{
//                   borderRadius: "15px",
//                   maxHeight: "360px",
//                   marginBottom: "10px",
//                 }}
//               />
//             </Col>

//             <Col md={7}>
//               <Card.Body
//                 className={`card-body-content ${!inView ? "animate-text" : ""}`}
//               >
//                 {/* Responsive Title */}
//                 <Card.Title
//                   className="cardtitle text-center"
//                   style={{
//                     fontSize: "calc(1.6rem + 0.5vw)", // Responsive font size
//                     fontWeight: "bold",
//                   }}
//                 >
//                    Prototype Services
//                 </Card.Title>

//                 {/* Responsive Text */}
//                 <Card.Text
//                   className="card-text"
//                   style={{
//                     fontSize: "calc(1rem + 0.3vw)", // Responsive font size
//                     marginTop: "20px",
//                   }}
//                 >
//                   Bringing your vision to life starts with a solid prototype,
//                   and at WebXplore Studio, our experienced UX designers excel in
//                   crafting detailed models that accurately reflect your user
//                   requirements. Our prototype services are designed to bridge
//                   the gap between your ideas and the final product, ensuring
//                   that every aspect of your web application or mobile app is
//                   thoughtfully planned and executed.
//                 </Card.Text>
//               </Card.Body>
//             </Col>
//           </Row>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </Carousel.Item>
// <Carousel.Item>
//   <Container fluid className="d-flex justify-content-center mt-5">
//     <Row className="w-100">
//       <Col>
//         <Card
//           ref={ref}
//           className={`full-width-card ${!inView ? "animate-card" : ""}`}
//           style={{ marginRight: "10%", marginLeft: "10%", marginBottom:"15vh" }}
//         >
//           <Row noGutters>
//             <Col md={5} className="card-image-section">
//               <img
//                 src={fullstackimg}
//                 alt="Custom web application"
//                 className="img-fluid w-full h-auto rounded-md object-cover mt-2"
//                 style={{
//                   borderRadius: "15px",
//                   maxHeight: "360px",
//                   marginBottom: "10px",
//                 }}
//               />
//             </Col>

//             <Col md={7}>
//               <Card.Body
//                 className={`card-body-content ${!inView ? "animate-text" : ""}`}
//               >
//                 {/* Responsive Title */}
//                 <Card.Title
//                   className="cardtitle text-center"
//                   style={{
//                     fontSize: "calc(1.6rem + 0.5vw)", // Responsive font size
//                     fontWeight: "bold",
//                   }}
//                 >
//                    Full Stack Development
//                 </Card.Title>

//                 {/* Responsive Text */}
//                 <Card.Text
//                   className="card-text"
//                   style={{
//                     fontSize: "calc(1rem + 0.3vw)", // Responsive font size
//                     marginTop: "20px",
//                   }}
//                 >
//                   Our Full Stack Development services at WebXplore Studio
//                   encompass both frontend and backend development, providing a
//                   seamless and integrated approach to building comprehensive web
//                   applications. We are proficient in a variety of technologies
//                   and frameworks, including MEAN (MongoDB, Express.js, Angular,
//                   Node.js), MERN (MongoDB, Express.js, React, Node.js), PHP,
//                   .NET, and more, allowing us to choose the best stack tailored
//                   to your project’s requirements.
//                 </Card.Text>
//               </Card.Body>
//             </Col>
//           </Row>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </Carousel.Item>
// <Carousel.Item>
//   <Container fluid className="d-flex justify-content-center mt-5">
//     <Row className="w-100">
//       <Col>
//         <Card
//           ref={ref}
//           className={`full-width-card ${!inView ? "animate-card" : ""}`}
//           style={{ marginRight: "10%", marginLeft: "10%", marginBottom:"15vh" }}
//         >
//           <Row noGutters>
//             <Col md={5} className="card-image-section">
//               <img
//                 src={thirdparty}
//                 alt="Custom web application"
//                 className="img-fluid w-full h-auto rounded-md object-cover mt-2"
//                 style={{
//                   borderRadius: "15px",
//                   maxHeight: "360px",
//                   marginBottom: "10px",
//                 }}
//               />
//             </Col>

//             <Col md={7}>
//               <Card.Body
//                 className={`card-body-content ${!inView ? "animate-text" : ""}`}
//               >
//                 {/* Responsive Title */}
//                 <Card.Title
//                   className="cardtitle text-center"
//                   style={{
//                     fontSize: "calc(1.6rem + 0.5vw)", // Responsive font size
//                     fontWeight: "bold",
//                   }}
//                 >
//                    Third Party Integration
//                 </Card.Title>

//                 {/* Responsive Text */}
//                 <Card.Text
//                   className="card-text"
//                   style={{
//                     fontSize: "calc(1rem + 0.3vw)", // Responsive font size
//                     marginTop: "20px",
//                   }}
//                 >
//                  In today’s interconnected digital landscape, integrating
//                   third-party services is essential for enhancing the
//                   functionality and user experience of your web applications. At
//                   WebXplore Studio, our Third Party Integration services focus
//                   on creating seamless connections between your web applications
//                   and external platforms, APIs, and data sources.
//                 </Card.Text>
//               </Card.Body>
//             </Col>
//           </Row>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </Carousel.Item>
// <Carousel.Item>
//   <Container fluid className="d-flex justify-content-center mt-5">
//     <Row className="w-100">
//       <Col>
//         <Card
//           ref={ref}
//           className={`full-width-card ${!inView ? "animate-card" : ""}`}
//           style={{ marginRight: "10%", marginLeft: "10%", marginBottom:"15vh" }}
//         >
//           <Row noGutters>
//             <Col md={5} className="card-image-section">
//               <img
//                 src={swdev}
//                 alt="Custom web application"
//                 className="img-fluid w-full h-auto rounded-md object-cover mt-2"
//                 style={{
//                   borderRadius: "15px",
//                   maxHeight: "360px",
//                   marginBottom: "10px",
//                 }}
//               />
//             </Col>

//             <Col md={7}>
//               <Card.Body
//                 className={`card-body-content ${!inView ? "animate-text" : ""}`}
//               >
//                 {/* Responsive Title */}
//                 <Card.Title
//                   className="cardtitle text-center"
//                   style={{
//                     fontSize: "calc(1.6rem + 0.5vw)", // Responsive font size
//                     fontWeight: "bold",
//                   }}
//                 >
//                    Software Product Development
//                 </Card.Title>

//                 {/* Responsive Text */}
//                 <Card.Text
//                   className="card-text"
//                   style={{
//                     fontSize: "calc(1rem + 0.3vw)", // Responsive font size
//                     marginTop: "20px",
//                   }}
//                 >
//                  At WebXplore Studio, we offer comprehensive Software Product
//                   Development services designed to transform your innovative
//                   ideas into market-ready products. Our team combines technical
//                   expertise with industry knowledge to deliver software
//                   solutions that are not only functional but also secure and
//                   user-centric.
//                 </Card.Text>
//               </Card.Body>
//             </Col>
//           </Row>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </Carousel.Item>
// <Carousel.Item>
//   <Container fluid className="d-flex justify-content-center mt-5">
//     <Row className="w-100">
//       <Col>
//         <Card
//           ref={ref}
//           className={`full-width-card ${!inView ? "animate-card" : ""}`}
//           style={{ marginRight: "10%", marginLeft: "10%", marginBottom:"15vh" }}
//         >
//           <Row noGutters>
//             <Col md={5} className="card-image-section">
//               <img
//                 src={upgrade}
//                 alt="Custom web application"
//                 className="img-fluid w-full h-auto rounded-md object-cover mt-2"
//                 style={{
//                   borderRadius: "15px",
//                   maxHeight: "360px",
//                   marginBottom: "10px",
//                 }}
//               />
//             </Col>

//             <Col md={7}>
//               <Card.Body
//                 className={`card-body-content ${!inView ? "animate-text" : ""}`}
//               >
//                 {/* Responsive Title */}
//                 <Card.Title
//                   className="cardtitle text-center"
//                   style={{
//                     fontSize: "calc(1.6rem + 0.5vw)", // Responsive font size
//                     fontWeight: "bold",
//                   }}
//                 >
//                    Upgradation Services
//                 </Card.Title>

//                 {/* Responsive Text */}
//                 <Card.Text
//                   className="card-text"
//                   style={{
//                     fontSize: "calc(1rem + 0.3vw)", // Responsive font size
//                     marginTop: "20px",
//                   }}
//                 >
//                  Keeping your web technologies up-to-date is crucial for
//                   maintaining performance, security, and user satisfaction. At
//                   WebXplore Studio, our Upgradation Services are designed to
//                   revitalize your existing websites and applications by
//                   upgrading outdated technologies and migrating to new, more
//                   efficient platforms.
//                 </Card.Text>
//               </Card.Body>
//             </Col>
//           </Row>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </Carousel.Item>
  
// <Carousel.Item>
//   <Container fluid className="d-flex justify-content-center mt-5">
//     <Row className="w-100">
//       <Col>
//         <Card
//           ref={ref}
//           className={`full-width-card ${!inView ? "animate-card" : ""}`}
//           style={{ marginRight: "10%", marginLeft: "10%", marginBottom:"15vh" }}
//         >
//           <Row noGutters>
//             <Col md={5} className="card-image-section">
//               <img
//                 src={ba}
//                 alt="Custom web application"
//                 className="img-fluid w-full h-auto rounded-md object-cover mt-2"
//                 style={{
//                   borderRadius: "15px",
//                   maxHeight: "360px",
//                   marginBottom: "10px",
//                 }}
//               />
//             </Col>

//             <Col md={7}>
//               <Card.Body
//                 className={`card-body-content ${!inView ? "animate-text" : ""}`}
//               >
//                 {/* Responsive Title */}
//                 <Card.Title
//                   className="cardtitle text-center"
//                   style={{
//                     fontSize: "calc(1.6rem + 0.5vw)", // Responsive font size
//                     fontWeight: "bold",
//                   }}
//                 >
//                    Consulting and Business Analysis
//                 </Card.Title>

//                 {/* Responsive Text */}
//                 <Card.Text
//                   className="card-text"
//                   style={{
//                     fontSize: "calc(1rem + 0.3vw)", // Responsive font size
//                     marginTop: "20px",
//                   }}
//                 >
//                  Navigating the complexities of web development projects
//                   requires expert guidance and strategic planning. At WebXplore
//                   Studio, our Consulting and Business Analysis services provide
//                   you with the insights and direction needed to make informed
//                   decisions and achieve your business objectives.Our experienced
//                   consultants work closely with you to understand your business
//                   model, goals, and challenges.
//                 </Card.Text>
//               </Card.Body>
//             </Col>
//           </Row>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </Carousel.Item>
  
      
//       </Carousel>
//     </div>
//   );
// };

// export default Services;
import React from 'react';
import { useState } from 'react';
import { Carousel, Card, Row, Col, Container, Button } from 'react-bootstrap';

const Services = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="d-flex justify-content-center mt-5 mb-5">
      <h2 className="text-center mb-4">Our Services</h2> {/* Title at the top */}

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false} // Remove the indicators
        interval={3000}
      >
        {/* Card 1 */}
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="service-card">
                <Row noGutters>
                  <Col md={5} className="card-image-section">
                    <img
                      src="path_to_image/image1.jpg" // Replace with actual image path
                      alt="Service 1"
                      className="img-fluid w-100 h-auto rounded-md"
                      style={{
                        borderRadius: '15px',
                        maxHeight: '360px',
                        marginBottom: '10px',
                      }}
                    />
                  </Col>

                  <Col md={7}>
                    <Card.Body>
                      <Card.Title
                        className="card-title text-center"
                        style={{
                          fontSize: 'calc(1.6rem + 0.5vw)',
                          fontWeight: 'bold',
                        }}
                      >
                        Service 1 Title
                      </Card.Title>

                      <Card.Text
                        className="card-text"
                        style={{
                          fontSize: 'calc(1rem + 0.3vw)',
                          marginTop: '20px',
                        }}
                      >
                        This is a description of the first service. It provides details on what the service offers and how it helps your business grow.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Card 2 */}
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="service-card">
                <Row noGutters>
                  <Col md={5} className="card-image-section">
                    <img
                      src="path_to_image/image2.jpg" // Replace with actual image path
                      alt="Service 2"
                      className="img-fluid w-100 h-auto rounded-md"
                      style={{
                        borderRadius: '15px',
                        maxHeight: '360px',
                        marginBottom: '10px',
                      }}
                    />
                  </Col>

                  <Col md={7}>
                    <Card.Body>
                      <Card.Title
                        className="card-title text-center"
                        style={{
                          fontSize: 'calc(1.6rem + 0.5vw)',
                          fontWeight: 'bold',
                        }}
                      >
                        Service 2 Title
                      </Card.Title>

                      <Card.Text
                        className="card-text"
                        style={{
                          fontSize: 'calc(1rem + 0.3vw)',
                          marginTop: '20px',
                        }}
                      >
                        This is a description of the second service. It provides insight into the features and advantages of this service offering.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Card 3 */}
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="service-card">
                <Row noGutters>
                  <Col md={5} className="card-image-section">
                    <img
                      src="path_to_image/image3.jpg" // Replace with actual image path
                      alt="Service 3"
                      className="img-fluid w-100 h-auto rounded-md"
                      style={{
                        borderRadius: '15px',
                        maxHeight: '360px',
                        marginBottom: '10px',
                      }}
                    />
                  </Col>

                  <Col md={7}>
                    <Card.Body>
                      <Card.Title
                        className="card-title text-center"
                        style={{
                          fontSize: 'calc(1.6rem + 0.5vw)',
                          fontWeight: 'bold',
                        }}
                      >
                        Service 3 Title
                      </Card.Title>

                      <Card.Text
                        className="card-text"
                        style={{
                          fontSize: 'calc(1rem + 0.3vw)',
                          marginTop: '20px',
                        }}
                      >
                        This is a description of the third service. It highlights the key aspects and benefits that the service brings to the table.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Add more cards as necessary */}
      </Carousel>

      <div className="text-center mt-4">
        <Button
          variant="primary"
          style={{
            backgroundColor: '#007bff', // Customize the button color
            borderColor: '#007bff',
            fontSize: '1.2rem',
            padding: '10px 20px',
            margin: '10px',
          }}
          onClick={() => console.log('More Info')}
        >
          More Information
        </Button>
      </div>
    </Container>
  );
};

export default Services;
