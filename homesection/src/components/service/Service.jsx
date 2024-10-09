import "./Cta.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../header/Header.css";
import { NavLink } from "react-router-dom";
import weblogo from "../../assets/webservice.jpg";
import applogo from "../../assets/applogo.jpg";
import "./Service.css";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    window.scrollTo(top);
  }, []);
  return (
    <div>
      <div>
        <div className="container-fluid banner abc imgservice">
          <div className="container-fluid banner d-flex align-items-center justify-content-center abc imgservice">
            <div className="col-md-6 d-flex flex-column align-items-center text-center">
              <h2>What we do</h2>
              <br />
              <h5 style={{ color: "white" }}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  facere consectetur recusandae accusantium ducimus
                  exercitationem cupiditate excepturi? Earum molestiae fugit,
                  labore doloribus, exercitationem neque enim quia repellat,
                  officia quos obcaecati? Lorem ipsum do dolor sit amet
                  consectetur adipisicing elit. Placeat doloribus eveniet
                  repudiandae ea, delectus deleniti
                </p>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center ">
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src={weblogo} alt="Macbook" />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    At WebXplore Studio, we offer cutting-edge web development
                    services tailored to meet your business needs. Our team of
                    experienced developers and designers deliver
                    high-performance, scalable, and visually appealing websites
                    that boost user engagement and drive business growth.
                  </Card.Text>
                  <NavLink to={"./subservice1"}>
                    <button className="w-100 mt-auto btncard">Read</button>
                  </NavLink>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src={applogo} alt="App Development" />
                <Card.Body>
                  <Card.Title>Mobile App Development</Card.Title>
                  <Card.Text>
                    Elevate your business with custom mobile app solutions
                    tailored to your needs. We specialize in iOS, Android, and
                    cross-platform app development, ensuring seamless user
                    experiences across all devices. From concept to launch, our
                    expert team delivers innovative, scalable, and secure apps
                    designed to enhance user engagement and drive business
                    growth.
                  </Card.Text>
                  <NavLink to={"./subservice2"}>
                    <button className="w-100 mt-auto btncard">Read</button>
                  </NavLink>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="data:image/jpeg;base64,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"
                  alt="Other Services"
                />
                <Card.Body>
                  <Card.Title>Other Services</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat doloribus eveniet repudiandae ea...
                  </Card.Text>
                  <NavLink to={"./subservice3"}>
                    <button className="w-100 mt-auto btncard">Read</button>
                  </NavLink>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
