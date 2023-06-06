import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'Catalog', href: '#catalog' },
  { text: 'Cart', href: '#cart'}
];

export default function NavBar() {
  const expandValues = ['lg'];

  return (
    <>
      {expandValues.map(expand => (
        <Navbar key={expand} className="sticky-top" bg="dark" variant="dark" expand={expand}>
          <Container fluid>
            <Navbar.Brand className="justify-content-end" href="/" >Dark Culture</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="text-dark text-decoration-none"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  href="/"
                  as="a"
                >
                  Dark Culture
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  {navLinks.map((link, index) => (
                    <Nav.Link key={index} className="title-font" href={link.href}>
                      {link.text}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
