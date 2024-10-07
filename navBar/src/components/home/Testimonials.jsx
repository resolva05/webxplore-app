// import { Carousel, Card } from "react-bootstrap";
import "./Testimon.css";
// import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useRef } from "react";
import icon1 from "../../assets/icons1.png";
import icon2 from "../../assets/icons2.png";

const Testimonials = () => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="carousel-container lastsection" ref={carouselRef}>
        <div
          className="text-center testmonheading"
          style={{ fontFamily: "sans-serif" }}
        >
          Clients testimonials
        </div>
        <Carousel id="myCarousel" data-bs-theme="dark">
          <Carousel.Item>
            <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
              <div
                className="rounded-full overflow-hidden mx-auto mt-2 shadow-lg"
                style={{
                  width: "150px", // fixed width
                  height: "150px",
                  borderRadius: "50%", // fixed height (same as width for perfect circle)
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                  alt="Laptop Logo"
                  className="w-full h-full shadow-lg "
                  style={{ height: "100%" }}
                />
              </div>
              <div className="p-4">
                <div
                  className="text-container mx-auto"
                  style={{
                    maxWidth: "85%",
                    padding: "10px",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    className="mt-3 text-sm text-gray-600"
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "20px",
                      width: "85%",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    Working with WebXplore Studio has been an absolute pleasure.
                    Their team took the time to understand our business goals
                    and delivered a website that exceeded our expectations. The
                    design is clean, responsive, and user-friendly. We’ve seen a
                    significant increase in traffic and engagement since the
                    launch
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
                    <p style={{marginTop:"10px"}}>- CEO, Resolva Insigts Pvt Ltd</p>
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
              <div
                className="rounded-full overflow-hidden mx-auto mt-2 shadow-lg"
                style={{
                  width: "150px", // fixed width
                  height: "150px",
                  borderRadius: "50%", // fixed height (same as width for perfect circle)
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                  alt="Laptop Logo"
                  className="w-full h-full shadow-lg"
                  style={{ height: "100%" }}
                />
              </div>
              <div className="p-4">

                <div
                  className="text-container mx-auto"
                  style={{
                    maxWidth: "90%",
                    padding: "10px",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    className="mt-3 text-sm text-gray-600"
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "20px",
                      width: "85%",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    WebXplore Studio helped us create an e-commerce site that
                    truly represents our brand. Their team was professional and
                    responsive, making the entire experience smooth and
                    enjoyable. Our sales have increased significantly since
                    launching the new site!
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
                  </p>
                  <p>- Owner of Fashion Boutique Brand</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
              <div
                className="rounded-full overflow-hidden mx-auto mt-2 shadow-lg "
                style={{
                  width: "150px", // fixed width
                  height: "150px",
                  borderRadius: "50%", // fixed height (same as width for perfect circle)
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                  alt="Laptop Logo"
                  className=" w-full h-full shadow-lg "
                  style={{ height: "100%" }}
                />
              </div>
              <div className="p-4">
                <div
                  className="text-container mx-auto"
                  style={{
                    maxWidth: "85%",
                    padding: "10px",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    className="mt-3 text-sm text-gray-600"
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "20px",
                      width: "85%",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    We approached WebXplore Studio for an SEO strategy to
                    improve our online visibility. They conducted thorough
                    research and implemented effective tactics that delivered
                    immediate results. Our website's ranking has improved, and
                    we're attracting more customers than ever!
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
                  </p>
                  <p>- Founder of Food and Beverages</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
              <div
                className="rounded-full overflow-hidden mx-auto mt-2 shadow-lg"
                style={{
                  width: "150px", // fixed width
                  height: "150px",
                  borderRadius: "50%", // fixed height (same as width for perfect circle)
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                  alt="Laptop Logo"
                  className="w-full h-full shadow-lg "
                  style={{ height: "100%" }}
                />
              </div>
              <div className="p-4">
                <div
                  className="text-container mx-auto"
                  style={{
                    maxWidth: "85%",
                    padding: "10px",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    className="mt-3 text-sm text-gray-600"
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "20px",
                      width: "85%",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    We needed a dynamic website for our travel agency, and
                    WebXplore Studio delivered. They brought our ideas to life
                    with stunning visuals and an intuitive layout. Our clients
                    appreciate the ease of booking their adventures online, and
                    we’ve seen a significant uptick in inquiries!
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
                    <p style={{marginTop:"10px"}}>- Owner of Travel Firm</p>
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
              <div
                className="rounded-full overflow-hidden mx-auto mt-2 shadow-lg"
                style={{
                  width: "150px", // fixed width
                  height: "150px",
                  borderRadius: "50%", // fixed height (same as width for perfect circle)
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                  alt="Laptop Logo"
                  className="w-full h-full shadow-lg "
                  style={{ height: "100%" }}
                />
              </div>
              <div className="p-4">
                <div
                  className="text-container mx-auto"
                  style={{
                    maxWidth: "85%",
                    padding: "10px",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    className="mt-3 text-sm text-gray-600"
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "20px",
                      width: "85%",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    Working with WebXplore Studio on our digital marketing
                    campaign was a fantastic experience. They provided
                    innovative solutions and insights that significantly
                    increased our online engagement. The team is professional,
                    and their dedication to our success is commendable!
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
                    <p style={{marginTop:"10px"}}>- CMO of Fitness Company</p>
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
              <div
                className="rounded-full overflow-hidden mx-auto mt-2 shadow-lg"
                style={{
                  width: "150px", // fixed width
                  height: "150px",
                  borderRadius: "50%", // fixed height (same as width for perfect circle)
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/20/37/client-1295901_640.png"
                  alt="Laptop Logo"
                  className="w-full h-full shadow-lg "
                  style={{ height: "100%" }}
                />
              </div>
              <div className="p-4">
                <div
                  className="text-container mx-auto"
                  style={{
                    maxWidth: "85%",
                    padding: "10px",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    className="mt-3 text-sm text-gray-600"
                    style={{
                      whiteSpace: "normal",
                      wordWrap: "break-word",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginBottom: "20px",
                      width: "85%",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    We saw a significant increase in sales after launching our
                    new e-commerce site. The team at WebXplore Studio exceeded
                    our expectations!
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
                    <p style={{marginTop:"10px"}}>-	Marketing Director at Software Company</p>
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* Additional Carousel.Items here */}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
