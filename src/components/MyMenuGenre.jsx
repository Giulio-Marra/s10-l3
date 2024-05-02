import React from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const MyComponent = () => {
  return (
    <Container fluid className="mb-4 mt-2">
      <Row className="d-flex align-items-center ">
        <Col className="d-flex align-items-center p-0 col-10">
          <h1 className="mb-0 me-3 ms-3">TV Shows</h1>
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              id="genreDropdown"
              className="btn border rounded-0"
            >
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#" className="border">
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#" className="border">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item href="#" className="border">
                Fantasy
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex justify-content-end col-2 pe-3">
          <Button
            variant="dark"
            className="border rounded-0 px-3"
            type="button"
          >
            <i class="bi bi-grid-fill"></i>
          </Button>
          <Button
            variant="dark"
            className="border rounded-0 px-3"
            type="button"
          >
            <i class="bi bi-list"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
