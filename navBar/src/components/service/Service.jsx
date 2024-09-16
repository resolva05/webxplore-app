import React from 'react'
import './Cta.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Badge } from 'react-bootstrap';
import '../header/Header.css'


const Service = () => {
    return (
        <div>
            <div>
                <div className="container-fluid banner ">
                   
                    <div className="container-fluid banner d-flex align-items-center justify-content-center">
                        <div className="col-md-6 d-flex flex-column align-items-center text-center">
                            <h2>What we do</h2>
                            <br />
                            <h5 style={{ color: "white" }}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere consectetur recusandae accusantium ducimus exercitationem cupiditate excepturi? Earum molestiae fugit, labore doloribus, exercitationem neque enim quia repellat, officia quos obcaecati? Lorem ipsum do dolor sit amet consectetur adipisicing elit. Placeat doloribus eveniet repudiandae ea, delectus deleniti
                                </p>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row justify-content-center text-center'>
                    <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                        <Card style={{ width: '100%', borderRadius: '15px', overflow: 'hidden', marginTop: "30px" }}>
                            {/* Main Image */}
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/286x180.png?text=Macbook+Image"
                                alt="Macbook"
                            />
                            {/* Card body */}
                            <Card.Body >
                                <Card.Title>Web Development</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere consectetur recusandae accusantium ducimus exercitationem cupiditate excepturi? Earum molestiae fugit, labore doloribus, exercitationem neque enim quia repellat, officia quos obcaecati? Lorem ipsum do dolor sit amet consectetur adipisicing elit. Placeat doloribus eveniet repudiandae ea, delectus deleniti
                                </Card.Text>
                                {/* Read Button */}
                                <Button variant="dark" className="w-100">Read</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 mb-4' style={{}}>
                        <Card style={{ width: '100%', borderRadius: '15px', overflow: 'hidden', marginBottom: "30px", marginTop: "30px" }}>
                            {/* Image */}
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/286x180.png?text=Macbook+Image"
                                alt="Macbook"
                            />
                            {/* Card body */}
                            <Card.Body>
                                <Card.Title>Mobile App Development</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere consectetur recusandae accusantium ducimus exercitationem cupiditate excepturi? Earum molestiae fugit, labore doloribus, exercitationem neque enim quia repellat, officia quos obcaecati? Lorem ipsum do dolor sit amet consectetur adipisicing elit. Placeat doloribus eveniet repudiandae ea, delectus deleniti
                                </Card.Text>
                                {/* Read Button */}
                                <Button variant="dark" className="w-100">Read</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                        <Card style={{ width: '100%', borderRadius: '15px', overflow: 'hidden', marginTop: "30px" }}>
                            {/* Image */}
                            <Card.Img
                                variant="top"
                                src="https://via.placeholder.com/286x180.png?text=Macbook+Image"
                                alt="Macbook"
                            />
                            {/* Card body */}
                            <Card.Body>
                                <Card.Title>Extra</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere consectetur recusandae accusantium ducimus exercitationem cupiditate excepturi? Earum molestiae fugit, labore doloribus, exercitationem neque enim quia repellat, officia quos obcaecati? Lorem ipsum do dolor sit amet consectetur adipisicing elit. Placeat doloribus eveniet repudiandae ea, delectus deleniti
                                </Card.Text>
                                {/* Read Button */}
                                <Button variant="dark" className="w-100">Read</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service