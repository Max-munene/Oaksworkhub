import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";

const Mynav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixedy="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Oaks logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/gallery">Gallery</Link>
            </Nav.Link>
            <NavDropdown title="Ministries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">NextGen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Frontrunnerz
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                B.R.I.C.K.S
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">A.W.A.K.E</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Connect Groups
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Oaks Worship
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Prayer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Family</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.3.1">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              ></Form.Control>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Mynav;
