import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './PopUp.css';

const PopUp = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true); // Show the popup again after 2 minutes (120000 milliseconds)
    }, 120000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="custom-modal"
    >
      <div className="modal-header">
        <Button variant="close" onClick={handleClose} className="close-button">
          <img  alt="Close" className="close-icon" />
        </Button>
      </div>
      <Modal.Body className="custom-modal-body">
        <div className="left-section">
          <img 
            src="https://img.freepik.com/free-photo/nature-journey-travel-trekking-summertime-concept-vertical-shot-pathway-park-leading-forested-area-outdoor-view-wooden-boardwalk-along-tall-pine-trees-morning-forest_343059-3064.jpg" // Unsplash image
            alt="Description"
            className="popup-image"
          />
        </div>
        <div className="right-section">
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>
            <Form.Group controlId="formRequirements">
              <Form.Label>Requirements</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your requirements" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;
