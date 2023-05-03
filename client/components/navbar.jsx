import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar() {

  return (
    <>
      {['lg'].map(expand => (
        <Navbar key={expand} className="sticky-top" bg="dark" variant="dark" expand={expand}>
          <Container fluid>
            <Navbar.Brand className="justify-content-end" href="#home" >Smart Clothing</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Smart Clothing
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Nav.Link activeclassname="active" href="/">Home</Nav.Link>
                  <Nav.Link href="#catalog">Catalog</Nav.Link>
                  <Nav.Link activeclassname="active" href="#cart">Cart</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
