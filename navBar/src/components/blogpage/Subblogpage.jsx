import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { posts } from "./temp";
import "./Subblogpage.css";
import vid from "../../assets/vid.mp4";
const Subblogpage = () => {
  const { postId } = useParams();

  return (
      <>
      <video className="vid" src={vid} autoPlay loop muted/>
      <Container fluid className="mt-4">
        <Container className="text-center mb-4" style={{ maxWidth: "42rem" }}>
          <h3 className="font-weight-bold display-5">{posts[postId].title}</h3>
          <hr className="my-4" />
        </Container>

        <Container>
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={4} className="text-center">
              <img
                src={posts[postId].avatar}
                alt="Author Avatar"
                className="img-fluid rounded-circle"
                style={{ width: "150px", height: "150px" }}
              />
            </Col>
          </Row>

          <Row className="justify-content-center mb-3">
            <Col xs={12} md={6} className="text-center">
              <p>
                <strong>Author:</strong> {posts[postId].author}
              </p>
              <p>
                <strong>Publish Date:</strong> {posts[postId].date}
              </p>
              <p>
                <strong>Category:</strong> {posts[postId].category}
              </p>
              <p>
                <strong>Description:</strong> {posts[postId].description}
              </p>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <div
                className="text-animate"
                style={{
                  border: "2px solid gray",
                  padding: "20px",
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adip Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Reprehenderit qui aliquid
                quis ducimus eum delectus consequatur ipsum officiis, iste
                vitae, maxime numquam non magnam dolore velit sed libero, nihil
                quia. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam eaque debitis possimus voluptatem error totam sunt
                aliquid saepe similique. Minus ducimus perspiciatis nobis vitae
                possimus repellat omnis voluptate ullam! Libero. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Soluta, ipsam
                quisquam rerum vitae aliquam fugit eius molestias ex explicabo
                veniam earum delectus necessitatibus magnam enim nam ad eos
                nulla. Atque? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Animi, repudiandae aperiam veniam odit totam velit ipsa,
                voluptates voluptatum doloribus minus maxime soluta tenetur
                reiciendis corporis! Officiis aperiam ex labore dicta. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Ad
                molestiae, consequatur possimus, ipsa hic inventore, fugit sint
                esse ex et repudiandae ab? Mollitia dolores recusandae esse
                architecto! Doloribus, placeat eveniet. isicing elit. Sequi
                vitae eveniet quam id culpa doloremque suscipit adipisci placeat
                itaque, tempore tempora, asperiores facilis, corrupti nesciunt
                maxime error nemo excepturi accusamus. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat eos eum nemo aliquid
                rerum eligendi consequuntur libero provident tempore molestiae
                nostrum molestias voluptas qui, natus totam dolorum eius
                voluptatum nihil. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Error incidunt quae repellendus nulla.
                Voluptates cupiditate fugiat officia maxime impedit magni velit,
                nam dignissimos fugit a distinctio nobis consequatur, quia quas?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                architecto minima ipsa dolor. Illum qui explicabo quo pariatur,
                molestiae laborum, voluptates nisi doloribus eveniet earum ullam
                aperiam quisquam excepturi. Vitae!
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Subblogpage;
