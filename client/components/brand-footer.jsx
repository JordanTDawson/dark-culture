import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { brandTitles } from '../../database/universal-components/brand-titles';

export default function BrandFooter() {
  return (
    <Navbar style={{ flexWrap: 'wrap' }} bg="light" variant="light">
      <Container className="justify-content-center" fluid >
        {brandTitles.map((brand, index) => (
            <a key={index} className="text-dark text-decoration-none"><h4 className="mx-4 my-2 title-font ">{brand.text}</h4></a>
        ))}
      </Container>
    </Navbar>
  );
}
