import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Pricing.css';
import { useEffect } from 'react';
import vid from '../../assets/video4.mp4'

const Pricing = () => {
    useEffect(() => {
        window.scrollTo(top);
      }, []);
    const [isMobile, setIsMobile] = useState(true); // Mobile active by default
    const [introText, setIntroText] = useState([]);

    useEffect(() => {
        // The text to animate word by word
        const text = `We provide top-notch development solutions tailored to your needs. Whether it's a stunning website or a mobile app, our expert team ensures quality, performance, and client satisfaction. Choose the right plan and let us bring your vision to life.`;

        const words = text.split(' '); // Split the text into words

        // Animate word-by-word with increasing delay
        const animatedWords = words.map((word, index) => (
            <span
                key={index}
                className="word"
                style={{ animationDelay: `${index * 0.1}s` }} // Delay for each word
            >
                {word}&nbsp;
            </span>
        ));

        setIntroText(animatedWords);
    }, []);

    const handleToggle = () => {
        setIsMobile(!isMobile); // Toggle between Mobile and Web
    };

    return (
        <>
        <video className="vid" src={vid} autoPlay loop muted/>
        <Container className="pricing-page my-3" >
            {/* Intro Section */}
            <Row className="text-center mb-5">
                <Col>
                    <h1 className="intro-title">Why Choose Our Development Services?</h1>
                    <p className="intro-text">{introText}</p>
                </Col>
            </Row>

            {/* Pricing Toggle Switch */}
            <Row className="text-center mb-4" style={{marginTop:"-20px"}}>
                <Col>
                    <div className="d-flex justify-content-center align-items-center">
                        {/* Highlight active label */}
                        <span className={`switch-label ${isMobile ? '' : 'active'}`} >Web Development</span>
                        
                        {/* Toggle switch */}
                        <div
                            className={`toggle-switch ${isMobile ? 'active' : ''}`}
                            onClick={handleToggle}
                        ></div>

                        {/* Highlight active label */}
                        <span className={`switch-label ${!isMobile ? '' : 'active'}`}>Mobile Development</span>
                    </div>
                </Col>
            </Row>

            {/* Pricing Section */}
            <Row className="justify-content-center" >
                <Col md={8} lg={8} className="mb-4">
                    <Card className="pricing-card text-center" style={{ marginRight: "auto", marginLeft: "auto" }}>
                        <Card.Body>
                            <Card.Title className="pricing-plan-title">
                                {isMobile ? 'Mobile Development' : 'Web Development'}
                            </Card.Title>
                            <Card.Text className="price text-center">
                                {isMobile ? '$10000' : '$25000'}
                            </Card.Text>
                            <ul className="pricing-features">
                                {isMobile ? (
                                    <>
                                        <li>Cross-Platform Apps with React Native or Flutter</li>
                                        <li>UI/UX Design tailored to your brand</li>
                                        <li>Optimized for high performance and low memory usage</li>
                                        <li>Full App Store & Google Play submission</li>
                                        <li>6 Months post-launch support with updates</li>
                                        <li>Push notifications, offline support, and more!</li>
                                    </>
                                ) : (
                                    <>
                                        <li>Fully responsive design for all devices</li>
                                        <li>Search Engine Optimization (SEO) for better ranking</li>
                                        <li>Advanced CSS animations and interactions</li>
                                        <li>Custom Content Management System (CMS) Integration</li>
                                        <li>3 Months free maintenance and support</li>
                                        <li>Secure hosting setup and deployment</li>
                                    </>
                                )}
                            </ul>
                            <button className='pricebtn'>
                                Choose {isMobile ? 'Mobile' : 'Web'} Plan
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Pricing;
