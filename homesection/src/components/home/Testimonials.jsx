import "./Testimon.css";
import Card from "react-bootstrap/Card";
// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Testimonials = () => {
  return (
    <div className="container my-4">
      <div className="row d-flex justify-content-center" style={{gap:20}}>
        {/* Card 1 */}
        <Card className="crd" style={{ width: "18rem", backgroundColor: "#e1e2e6" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s"
            style={{ marginTop: "10px", borderRadius: "10px" }}
          />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nemo accusamus quibusdam consequuntur soluta aspernatur similique
              voluptatibus aliquam enim! Expedita, assumenda molestias. Ea iusto
              quia nisi saepe odio. Culpa, ratione.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 2 */}
        <Card  className="crd" style={{ width: "18rem", backgroundColor: "#e1e2e6" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s"
            style={{ marginTop: "10px", borderRadius: "10px" }}
          />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nemo accusamus quibusdam consequuntur soluta aspernatur similique
              voluptatibus aliquam enim! Expedita, assumenda molestias. Ea iusto
              quia nisi saepe odio. Culpa, ratione.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 3 */}
        <Card className="crd" style={{ width: "18rem", backgroundColor: "#e1e2e6" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzUt9Eal7bqRuP6zG7wmahoATbjN92Z3hajQ&s"
            style={{ marginTop: "10px", borderRadius: "10px" }}
          />
          <Card.Body>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nemo accusamus quibusdam consequuntur soluta aspernatur similique
              voluptatibus aliquam enim! Expedita, assumenda molestias. Ea iusto
              quia nisi saepe odio. Culpa, ratione.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;
