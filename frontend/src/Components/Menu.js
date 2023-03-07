import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {
  return (
    <Navbar style={{height:"50px"}}collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
      <Container>
        <Navbar.Brand href="#home">React With Laravel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              {' '}
              <Link className="text-decoration-none text-white" to="/contact">
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="gap-2">
            <Nav.Link className="btn btn-primary" href="#">Login</Nav.Link>
            <Link  className="btn btn-light text-black" to="/signup">
              Sign up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}