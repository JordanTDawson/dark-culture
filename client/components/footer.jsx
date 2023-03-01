import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container fluid>
        <Navbar.Brand className="justify-content-end" href="#home">Smart Clothing</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#catalog">Catalog</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
