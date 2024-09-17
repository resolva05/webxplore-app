// import React from 'react'
import "./Services.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useRef } from "react";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);
  return (
    <div className="carousel-container" ref={carouselRef}>
      <Carousel id="myCarousel" data-bs-theme="dark">
        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Laptop"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="font-semibold md:text-xl"
                style={{ fontSize: "25px" }}
              >
                Service 1
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
                  Qui alias molestias, animi doloremque error voluptate,
                  veritatis repellat perspiciatis numquam nisi et rem adipisci
                  possimus provident inventore obcaecati, beatae nemo.
                  Laboriosam! Rerum nesciunt distinctio quod ducimus accusantium
                  officia aliquam eveniet, saepe harum earum itaque aut!
                  Quibusdam aspernatur tempore.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Laptop"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="font-semibold md:text-xl"
                style={{ fontSize: "25px" }}
              >
                Service 2
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
                  Qui alias molestias, animi doloremque error voluptate,
                  veritatis repellat perspiciatis numquam nisi et rem adipisci
                  possimus provident inventore obcaecati, beatae nemo.
                  Laboriosam! Rerum nesciunt distinctio quod ducimus accusantium
                  officia aliquam eveniet, saepe harum earum itaque aut!
                  Quibusdam aspernatur tempore.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="max-w-full w-[90%] md:w-[300px] rounded-md text-center border-0 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Laptop"
              className="img-fluid w-full h-auto rounded-md object-cover mt-2 shadow-lg"
              style={{ borderRadius: "15px", maxHeight: "360px" }}
            />
            <div className="p-4">
              <h1
                className="font-semibold md:text-xl"
                style={{ fontSize: "25px" }}
              >
                Service 3
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
                  Qui alias molestias, animi doloremque error voluptate,
                  veritatis repellat perspiciatis numquam nisi et rem adipisci
                  possimus provident inventore obcaecati, beatae nemo.
                  Laboriosam! Rerum nesciunt distinctio quod ducimus accusantium
                  officia aliquam eveniet, saepe harum earum itaque aut!
                  Quibusdam aspernatur tempore.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* Additional Carousel.Items here */}
      </Carousel>
    </div>
  );
};

export default Services;
