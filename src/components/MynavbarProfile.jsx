import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NetflixNavbarProfile = ({ showHome }) => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="p-4 pt-0">
      <Container fluid className=" text-center">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px" }}
            // onClick={showHome}
            className="imgLogo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbarProfile;
