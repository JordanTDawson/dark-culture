import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function BrandFooter() {
  return (
    <Navbar bg="light" variant="light">
      <Container className="justify-content-center">
        <Navbar.Brand>SUPREME</Navbar.Brand>
        <Navbar.Brand>SHEIN</Navbar.Brand>
        <Navbar.Brand>GUCCI</Navbar.Brand>
        <Navbar.Brand>BAPE</Navbar.Brand>
        <Navbar.Brand>LOUIS VUITTON</Navbar.Brand>
        <Navbar.Brand>NIKE</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
