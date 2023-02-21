import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mynav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://iccnairobi.org/wp-content/uploads/2021/06/icc-Meru-259x300.jpg"
            width="30"
            height="35"
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
            <NavDropdown title="Connect Groups" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Taa Connect
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mwanga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jiwe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Kiota</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Bunifu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Angaza</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Nuru</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Mwamba</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.0">Imara</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.1">Jabali</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Fadhili</NavDropdown.Item>
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
