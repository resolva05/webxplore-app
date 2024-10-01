
import "./Cta.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../header/Header.css";
import { NavLink } from "react-router-dom";
import weblogo from "../../assets/webservice.jpg";
import applogo from "../../assets/applogo.jpg";
import "./Service.css";

const Service = () => {
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
                    <button  className="w-100 mt-auto btncard">
                      Read
                    </button>
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
                    <button className="w-100 mt-auto btncard">
                      Read
                    </button>
                  </NavLink>
                </Card.Body>
              </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <Card className="custom-card">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/286x180.png?text=Macbook+Image"
                  alt="Other Services"
                />
                <Card.Body>
                  <Card.Title>Other Services</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat doloribus eveniet repudiandae ea...
                  </Card.Text>
                  <NavLink to={"./subservice3"}>
                    <button className="w-100 mt-auto btncard">
                      Read
                    </button>
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
