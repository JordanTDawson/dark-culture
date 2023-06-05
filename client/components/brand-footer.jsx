import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function BrandFooter() {
  return (
    <Navbar className="" bg="light" variant="light">
      <Container className="justify-content-center">
        <a style={{ }}href=""><Navbar.Brand className="title-font ">DOC MARTEN'S</Navbar.Brand></a>
        <a style={{ }}href=""><Navbar.Brand className="title-font">HOT TOPIC</Navbar.Brand></a>
        <a style={{ }}href=""><Navbar.Brand className="title-font">ZUMIEZ</Navbar.Brand></a>
        <a style={{ }}href=""><Navbar.Brand className="title-font">VAMPIRE FREAKS</Navbar.Brand></a>
        <a style={{ }}href=""><Navbar.Brand className="title-font">SPENCER'S</Navbar.Brand></a>
        <a style={{ }}href=""><Navbar.Brand className="title-font">COMBAT BOOTS</Navbar.Brand></a>
      </Container>
    </Navbar>
  );
}
