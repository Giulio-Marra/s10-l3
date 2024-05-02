import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  Button,
  Form,
} from "react-bootstrap";
import avatar from "../assets/avatar.png";
import MynavbarProfile from "../components/MynavbarProfile";
import MyFooter from "./MyFooter";

function MyProfile({ togglePage }) {
  return (
    <>
      <MynavbarProfile showHome={togglePage} />
      <div className="mainProfile">
        <Container>
          <Row className="mb-3">
            <Col>
              <h1>Edit Profile</h1>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={4}>
              <img src={avatar} alt="Profile Avatar" className="img-fluid" />
            </Col>
            <Col md={8}>
              <div className="border-bottom pb-3">
                <h3 className="bg-secondary p-2">Strive Student</h3>
                <h5 className="mt-4">Lenguages:</h5>
                <Dropdown className="mb-2">
                  <Dropdown.Toggle
                    variant="transparent"
                    id="languageDropdown"
                    className="rounded-0 border text-white"
                  >
                    English
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#">Italian</Dropdown.Item>
                    <Dropdown.Item href="#">Spanish</Dropdown.Item>
                    <Dropdown.Item href="#">English</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="border-bottom  py-3">
                <h3>Maturity Settings :</h3>
                <h4 className="d-inline-block bg-secondary p-2">
                  All Maturity Ratings
                </h4>
                <p>Show titles of all maturity rating for this profile</p>
                <Button
                  variant="transparent"
                  className="rounded-0 mb-2 p-2 px-4 border text-white"
                >
                  Edit
                </Button>
              </div>
              <div className="border-bottom  py-3">
                <h3>Autoplay Controls</h3>
                <Form.Check
                  type="checkbox"
                  label="Autoplay next episode in a series"
                  className="mb-2 text-secondary"
                />
                <Form.Check
                  type="checkbox"
                  label="Autoplay previews while browsing"
                  className="mb-2 text-secondary"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex justify-content-between hoverButton ">
                <Button
                  className="border rounded-0 px-5 "
                  variant="transparent"
                >
                  SAVE
                </Button>
                <Button
                  className="border rounded-0 px-5 "
                  variant="transparent"
                >
                  CANCEL
                </Button>
                <Button className="border rounded-0 px-5" variant="transparent">
                  DELETE PROFILE
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <MyFooter />
    </>
  );
}

export default MyProfile;
