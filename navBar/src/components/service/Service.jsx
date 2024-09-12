import React from 'react'
import '../Cta.css'
// import { ArrowUpRight } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Badge } from 'react-bootstrap';
import '../header/Header.css'


const Service = () => {
    return (
        <div>
            <div><div className="container-fluid banner">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 d-flex flex-column align-items-center text-center">
                        <h2>What we do</h2>
                        <br />
                        <h5 style={{color:"white"}}> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi debitis maiores aliquam ea pariatur accusamus voluptate iure illum! Libero nam suscipit nihil accusantium ratione voluptatum ad! Consectetur quae dignissimos nihil!</p> </h5>
                    </div>
                </div>
            </div>
            </div>

            <div className='d-flex justify-content-center text-center' >
                <div className='crd' style={{ marginRight: '10px', marginTop: "25px", marginBottom: "25px" }}>
                    <Card style={{ width: '20rem', borderRadius: '15px', overflow: 'hidden', height: "28rem" }}>
                        {/* Image */}
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/286x180.png?text=Macbook+Image" // Replace with actual image URL
                            alt="Macbook"
                        />

                        {/* Card body */}
                        <Card.Body>
                            <Card.Title>
                                Web Development
                            </Card.Title>

                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus eveniet repudiandae ea, delectus deleniti
                            </Card.Text>

                            {/* Read Button */}
                            <Button variant="dark" className="w-100">Read</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='crd ' style={{ marginRight: '10px', marginTop: "25px", marginBottom: "25px" }}>
                    <Card style={{ width: '20rem', borderRadius: '15px', overflow: 'hidden', height: "28rem" }}>
                        {/* Image */}
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/286x180.png?text=Macbook+Image"
                            alt="Macbook"
                        />

                        {/* Card body */}
                        <Card.Body>
                            <Card.Title>
                                Mobile App Development
                            </Card.Title>

                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus eveniet repudiandae ea, delectus deleniti
                            </Card.Text>

                            {/* Read Button */}
                            <Button variant="dark" className="w-100">Read</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='crd' style={{ marginRight: '10px', marginTop: "25px", marginBottom: "25px" }}>
                    <Card style={{ width: '20rem', borderRadius: '15px', overflow: 'hidden', height: "28rem" }}>
                        {/* Image */}
                        <Card.Img
                            variant="top"
                            src="https://via.placeholder.com/286x180.png?text=Macbook+Image"
                            alt="Macbook"
                        />

                        {/* Card body */}
                        <Card.Body>
                            <Card.Title>
                                Extra
                            </Card.Title>

                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus eveniet repudiandae ea, delectus deleniti
                            </Card.Text>
                            {/* Read Button */}
                            <Button variant="dark" className="w-100">Read</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Service