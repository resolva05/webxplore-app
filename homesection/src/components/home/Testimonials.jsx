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
    
      <div className="carousel-container" ref={carouselRef}>
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
                <h1
                  className="font-semibold md:text-xl"
                  style={{ fontSize: "20px" }}
                >
                  Client 1
                </h1>
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
                      margin: "0",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    Qui alias molestias, animi doloremque error voluptate,
                    veritatis repellat perspiciatis numquam nisi et rem adipisci
                    possimus provident inventore obcaecati, beatae nemo.
                    Laboriosam! Rerum nesciunt distinctio quod ducimus
                    accusantium officia aliquam eveniet, saepe harum earum
                    itaque aut! Quibusdam aspernatur tempore.
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
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
                <h1
                  className="font-semibold md:text-xl"
                  style={{ fontSize: "20px" }}
                >
                  Client 2
                </h1>
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
                      margin: "0",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    Qui alias molestias, animi doloremque error voluptate,
                    veritatis repellat perspiciatis numquam nisi et rem adipisci
                    possimus provident inventore obcaecati, beatae nemo.
                    Laboriosam! Rerum nesciunt distinctio quod ducimus
                    accusantium officia aliquam eveniet, saepe harum earum
                    itaque aut! Quibusdam aspernatur tempore.
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
                  </p>
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
                <h1
                  className="font-semibold md:text-xl"
                  style={{ fontSize: "20px" }}
                >
                  Client 3
                </h1>
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
                      margin: "0",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      src={icon1}
                      alt=""
                      style={{ marginBottom: "10px", marginRight: "5px" }}
                    />
                    Qui alias molestias, animi doloremque error voluptate,
                    veritatis repellat perspiciatis numquam nisi et rem adipisci
                    possimus provident inventore obcaecati, beatae nemo.
                    Laboriosam! Rerum nesciunt distinctio quod ducimus
                    accusantium officia aliquam eveniet, saepe harum earum
                    itaque aut! Quibusdam aspernatur tempore.
                    <img
                      src={icon2}
                      alt=""
                      style={{ marginTop: "10px", marginLeft: "5px" }}
                    />
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
