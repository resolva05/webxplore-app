// import { useParams } from "react-router-dom";
import img from "../../assets/blogimg.png";
import { NavLink } from "react-router-dom";
import img2 from "../../assets/categoryimg.png";
import { useState } from "react";
import "./Blogpage.css";
import logo from "../../assets/logonew.png";
import { posts } from "./temp";
import vid from '../../assets/blogvideo.mp4'
import {
  Row,
  Col,
  Card,
  Container,
  Badge,
  Form,
  ListGroup,
} from "react-bootstrap";

const categories = [
  "Design",
  "Technology",
  "Business",
  "Health",
  "Education",
  "Travel",
  "Food",
  "Fashion",
  "Sports",
];
const Blogpage = () => {
  // const { name } = useParams();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevState) =>
      prevState.includes(category)
        ? prevState.filter((c) => c !== category)
        : [...prevState, category]
    );
  };

  const filteredPosts = selectedCategories.length
    ? posts.filter((post) => selectedCategories.includes(post.category))
    : posts;

  return (
    <>
    <video className="vid" src={vid} autoPlay loop muted/>
      <Container fluid className="mt-4" style={{ marginBottom: "20px" }}>
        <Container className="text-center mb-5" style={{ maxWidth: "42rem" }}>
          <Badge pill bg="light" text="dark" className="px-3 py-1 mb-3">
            OUR BLOG
          </Badge>
          <h1 className="display-6 font-weight-bold">
            Welcome to our blog{" "}
            <img
              src={img}
              alt=""
              style={{ height: "40px", marginBottom: "18px" }}
            />
          </h1>
        </Container>
        <Row>
          <Col md={2} className="mb-4">
            <div className="text-center">
              <h5 className="mb-4">
                Categories{" "}
                <img
                  src={img2}
                  alt=""
                  style={{ height: "17px", cursor: "pointer" }}
                  onClick={() => setShowCategories(!showCategories)}
                />
              </h5>
              {showCategories && (
                <ListGroup>
                  {categories.map((category) => (
                    <ListGroup.Item key={category}>
                      <Form.Check
                        type="checkbox"
                        label={category}
                        onChange={() => handleCategoryChange(category)}
                        checked={selectedCategories.includes(category)}
                      />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              <input
                type="text"
                placeholder="Type Here.."
                style={{
                  borderRadius: "20px",
                  border: "2px solid gray",
                  padding: "5px",
                }}
              />{" "}
              <NavLink>
                <img
                  src={logo}
                  alt=""
                  style={{
                    height: "30px",
                    marginBottom: "50px",
                    marginTop: "50px",
                  }}
                />
              </NavLink>
            </div>
          </Col>

          <Col md={9}>
            <Row className="g-4">
              {filteredPosts.map((post) => (
                <Col md={6} lg={4} key={post.title}>
                  <Card style={{ borderRadius: "20px", height: "100%" }}>
                    <Card.Img
                      variant="top"
                      src={post.poster}
                      className="aspect-ratio-16/9"
                    />
                    <Card.Body>
                      <Card.Text className="text-muted text-xs">
                        #{post.category}
                      </Card.Text>
                      <Card.Title className="font-weight-bold">
                        {post.title}
                      </Card.Title>
                      <Card.Text>{post.description}</Card.Text>
                      <div className="d-flex">
                        <p style={{ fontWeight: "bold" }}>Publish Date:</p>
                        <p style={{ marginLeft: "5px" }}>{post.date}</p>
                      </div>
                    </Card.Body>
                    <div className="text-center hh">
                      {
                        <NavLink to={`/blogpage/subblogpage/${post.id}`}>
                          <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white "
                            style={{
                              width: "80%",
                              borderRadius: "20px",
                              marginTop: "-15px",
                              marginBottom: "20px",
                            }}
                          >
                            Read More
                          </button>
                        </NavLink>
                      }
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blogpage;
