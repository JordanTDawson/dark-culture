import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { navLinks } from '../../database/universal-components/navbar-data';

export default function NavBar() {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const expandValues = ['lg'];

  const closeOffCanvas = () => {
    setShowOffCanvas(false);
  };

  return (
    <>
      {expandValues.map(expand => (
        <Navbar key={expand} className="sticky-top" bg="dark" variant="dark" expand={expand}>
          <Container fluid>
            <Navbar.Brand className="logo-font justify-content-end" href="/" >Dark Culture</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={() => setShowOffCanvas(prevState => !prevState)}
            />
            <Navbar.Offcanvas
              show={showOffCanvas}
              onHide={closeOffCanvas}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="logo-font text-dark text-decoration-none"
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
                    <Nav.Link
                      key={index}
                      className="title-font"
                      href={link.href}
                      onClick={closeOffCanvas}
                    >
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
