import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { Link, NavLink } from "react-router-dom";

const NetflixNavbar = ({ showProfile }) => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container fluid className="align-items-center">
        <Navbar.Brand href="">
          <img
            src={logo}
            alt="Logo"
            as={Link}
            to="/"
            style={{ height: "40px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="netflix-navbar-nav" />
        <Navbar.Collapse id="netflix-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/tvshows" className="nav-link">
              TV Shows
            </NavLink>
            <NavLink to="/movies" className="nav-link">
              Movies
            </NavLink>
            <NavLink to="/recentlyadded" className="nav-link">
              Recently Added
            </NavLink>
            <NavLink to="/mylist" className="nav-link">
              My List
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 bg-dark text-white"
              aria-label="Search"
            />
            <Button className="btnSearch">
              <i className="bi bi-search"></i>
            </Button>
          </Form>
          <Nav className="align-items-center-lg">
            <Nav.Link href="">Kids</Nav.Link>
            <Nav.Link href="">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <NavDropdown
              title={
                <img
                  src={avatar}
                  alt="Profile"
                  style={{ width: 30, height: 30 }}
                />
              }
              id="nav-dropdown"
              align="end"
            >
              {/* <NavDropdown.Item href="" onClick={showProfile}>
                Profile
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              {/* <Link className="NavDropdown.Item" to="/profile">
                My Profile
              </Link> */}
              <NavDropdown.Item href="">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;
