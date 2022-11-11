import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
const Add = ({ show, handleClose, addMovie }) => {
  const[newMovie, setNewMovie] = useState({
    main_img: "",
    title: "",
    duration: "",
    date: "",
    rate: "1",
    genre: "",
    description: "",
  });
  const onStarClick = (nextValue, prevValue, name) => {
    setRate(nextValue);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="image url"
                  onChange={handlechange}
                />
              </Form.Group>
            </Row>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              // value={rateIt}
              // onStarClick={onStarClick}
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handlechange} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Duration</Form.Label>
                <Form.Control onChange={handlechange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Genre</Form.Label>
                <Form.Select
                  defaultValue="Choose Genre"
                  onChange={handlechange}
                >
                  <option>...</option>
                  <option>Thriller</option>
                  <option>Action</option>
                  <option>Romance</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              addMovie(newMovie);
              handleClose();
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
