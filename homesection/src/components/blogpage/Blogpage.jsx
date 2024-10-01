import { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/blogimg.png";
import img2 from "../../assets/categoryimg.png";
import { ArrowRight, MessageCircle } from "lucide-react"; // Comment Icon
import { Row, Col, Card, Container, Badge, Form, ListGroup, Modal } from "react-bootstrap";
import logo from "../../assets/logonew.png";
import vid from "../../assets/blogvideo.mp4";
import { posts } from "./temp.jsx";
import "./Blogpage.css";

const categories = [
  "Web Development",
  "AI Web Development",
  "Dark Mode",
  "No-code/low-code",
  "JAMstack Revolution",
  "AR/VR",
  "Accessibility in Web Design",
  "5G",
  "Sports",
];

const Blogpage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [comments, setComments] = useState({}); // Store comments per post
  const [commentVisibility, setCommentVisibility] = useState(false); // Control modal visibility
  const [activePostId, setActivePostId] = useState(null); // Track which post's comments are being shown

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevState) =>
      prevState.includes(category)
        ? prevState.filter((c) => c !== category)
        : [...prevState, category]
    );
  };

  const handleCommentSubmit = (postId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), comment],
    }));
  };

  const handleOpenComments = (postId) => {
    setActivePostId(postId);
    setCommentVisibility(true);
  };

  const handleCloseComments = () => {
    setCommentVisibility(false);
    setActivePostId(null);
  };

  const filteredPosts = selectedCategories.length
    ? posts.filter((post) => selectedCategories.includes(post.category))
    : posts;

  return (
    <>
      <video className="vid" src={vid} autoPlay loop muted />
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
                  <Card  className="card-hover abc" style={{ borderRadius: "20px", height: "97%" }}>
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

                    {/* Adjusting Read More Button and Comment Icon */}
                    <div
                      className="d-flex align-items-center justify-content-between"
                      style={{ padding: "10px 15px", marginBottom: "20px" }}
                    >
                      {/* Read More Button (80% width) */}
                      <NavLink
                        to={`/blogpage/subblogpage/${post.id}`}
                        style={{ width: "77%" }}
                      >
                        <button
                          type="button"
                          className="inline-flex items-xcenter rounded-md px-3 py-2 text-sm font-semibold  read-more-btn"
                          style={{
                            width: "100%",
                            borderRadius: "20px",
                          }}
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 arrow-right" />
                        </button>
                      </NavLink>

                      {/* Comment Button (20% width) with Comment Count */}
                      <div
                        className="comment-icon-wrapper d-flex align-items-center justify-content-center"
                        style={{ width: "20%" }}
                      >
                        <button
                          onClick={() => handleOpenComments(post.id)}
                          className="comment-icon-btn"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            borderRadius: "20px",
                            // backgroundColor: "#f8f9fa",
                            // border: "1px solid #ced4da",
                            padding: "5px",
                            marginTop:"-17px",
                            height:"42px"

                          }}
                        >
                          <MessageCircle size={24} style={{marginBottom:"3px"}} />
                          <span
                            className="comment-count"
                            style={{ marginLeft: "5px", fontWeight: "bold",marginBottom:"3px"}}
                          >
                            {comments[post.id]?.length || 0}
                          </span>
                        </button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Comment Modal */}
        <Modal
          show={commentVisibility}
          onHide={handleCloseComments}
          className="custom-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Scrollable comment box */}
            <div className="comment-box">
              {comments[activePostId]?.length > 0 ? (
                comments[activePostId].map((comment, index) => (
                  <div key={index} className="comment-item">
                    <div className="comment-icon">{index + 1}</div> {/* Comment icon */}
                    <div className="comment-text">{comment}</div>
                  </div>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>

            {/* Comment Form (Now placed at the bottom) */}
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                const comment = e.target.elements.comment.value;
                if (comment) {
                  handleCommentSubmit(activePostId, comment);
                  e.target.reset();
                }
              }}
            >
              <Form.Group controlId="comment">
                <Form.Control type="text" placeholder="Write a comment..." />
              </Form.Group>
              <button type="submit" className="submit-btn mt-2">
                Submit
              </button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Blogpage;
