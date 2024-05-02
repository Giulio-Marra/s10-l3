import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-light mt-5 pt-5 ">
      <Container>
        <div>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ color: "#8b8c8b", fontSize: "1.5rem" }}
            className="iconSocial"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#8b8c8b", fontSize: "1.5rem" }}
            className="iconSocial"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#8b8c8b", fontSize: "1.5rem" }}
            className="iconSocial"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#8b8c8b", fontSize: "1.5rem" }}
            className="iconSocial"
          />
        </div>
        <Row>
          <Col md={3} className="d-flex flex-column">
            <a href="" className="list-group-item text-secondary">
              Audio and subtitles
            </a>
            <a href="" className="list-group-item text-secondary">
              Media Center
            </a>
            <a href="" className="list-group-item text-secondary">
              Privacy
            </a>
            <a href="" className="list-group-item text-secondary">
              Contact Us
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column">
            <a href="" className="list-group-item text-secondary">
              Audio Description
            </a>
            <a href="" className="list-group-item text-secondary">
              Investor Relations
            </a>
            <a href="" className="list-group-item text-secondary">
              Legal Notices
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column">
            <a href="" className="list-group-item text-secondary">
              Help Center
            </a>
            <a href="" className="list-group-item text-secondary">
              Jobs
            </a>
            <a href="" className="list-group-item text-secondary">
              Cookie Preferences
            </a>
          </Col>
          <Col md={3} className="d-flex flex-column">
            <a href="" className="list-group-item text-secondary">
              Gift Cards
            </a>
            <a href="" className="list-group-item text-secondary">
              Terms of Use
            </a>
            <a href="" className="list-group-item text-secondary">
              Corporate Information
            </a>
          </Col>
        </Row>
        <button className="btn border rounded-0 m-2 ms-0 text-secondary">
          Service Code
        </button>
        <p>
          © 1997-2019 Netflix, inc. {String.fromCharCode(123)}iqRtS23674627
          {String.fromCharCode(125)}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
