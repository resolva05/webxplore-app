// import { useParams } from "react-router-dom";
import img from "../../assets/blogimg.png";
import { NavLink } from "react-router-dom";
import img2 from "../../assets/categoryimg.png";
import { ArrowRight } from "lucide-react";
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
// import img from '../../assets/blogimg.png';

// const posts = [
//   {
//     id:1,
//     category: "Design",
//     title: "10 Tips for Crafting the Perfect UX Portfolio",
//     description:
//       "Learn how to showcase your design skills and stand out in a crowded job market.",
//     author: "Emily Lee",
//     date: "3 April 2023",
//     avatar:
//       "https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg",
//     poster:
//       "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
//   },
//   {
//     id:2,
//     category: "Technology",
//     title: "The Future of Mobile App Development",
//     description:
//       "Discover the latest trends and techniques that will shape the future of mobile app development.",
//     author: "John Smith",
//     date: "1 April 2023",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     poster:
//       "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//   },
//   {
//     id:3,
//     category: "Business",
//     title: "How to Launch a Successful Startup",
//     description:
//       "Learn the essential steps to launch a successful startup and make your dreams a reality.",
//     author: "Sarah Brown",
//     date: "28 March 2023",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     poster:
//       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id:4,
//     category: "Health",
//     title: "The Benefits of Mindfulness Meditation",
//     description:
//       "Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.",
//     author: "David Kim",
//     date: "25 March 2023",
//     avatar: "https://randomuser.me/api/portraits/men/46.jpg",
//     poster:
//       "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id:5,
//     category: "Education",
//     title: "Why Learning a Second Language is Important",
//     description:
//       "Explore the benefits of learning a second language and how it can improve your cognitive abilities.",
//     author: "Maria Rodriguez",
//     date: "22 March 2023",
//     avatar: "https://randomuser.me/api/portraits/men/97.jpg",
//     poster:
//       "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id:6,
//     category: "Travel",
//     title: "The Best Places to Visit in Europe",
//     description:
//       "Discover the top destinations in Europe and plan your dream vacation.",
//     author: "Alex Johnson",
//     date: "19 March 2023",
//     avatar: "https://randomuser.me/api/portraits/men/99.jpg",
//     poster:
//       "https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id:7,
//     category: "Food",
//     title: "How to Make the Perfect Cup of Coffee",
//     description:
//       "Learn the secrets to making the perfect cup of coffee and impress your friends and family.",
//     author: "Thomas Lee",
//     date: "16 March 2023",
//     avatar: "https://randomuser.me/api/portraits/women/63.jpg",
//     poster:
//       "https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
//   },
//   {
//     id:8,
//     category: "Fashion",
//     title: "The Latest Fashion Trends for Spring 2023",
//     description:
//       "Discover the hottest fashion trends for the upcoming spring season and stay ahead of the curve.",
//     author: "Jessica Kim",
//     date: "13 March 2023",
//     avatar: "https://randomuser.me/api/portraits/women/47.jpg",
//     poster:
//       "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id:9,
//     category: "Sports",
//     title: "The Benefits of Yoga for Athletes",
//     description:
//       "Learn how practicing yoga can improve your athletic performance and prevent injuries.",
//     author: "Michael Johnson",
//     date: "10 March 2023",
//     avatar: "https://randomuser.me/api/portraits/men/86.jpg",
//     poster:
//       "https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//   },
// ];

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
                            <ArrowRight className="ml-2 h-4 w-4 arrow-right" />
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
