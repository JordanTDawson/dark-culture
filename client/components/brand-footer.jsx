import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const brandTitles = [
  { text: "DOC MARTEN'S" },
  { text: "HOT TOPIC" },
  { text: "ZUMIEZ" },
  { text: "VAMPIRE FREAKS" },
  { text: "SPENCER'S" },
  { text: 'COMBAT BOOTS' }
];

export default function BrandFooter() {
  return (
    <Navbar className="" bg="light" variant="light">
      <Container className="justify-content-center">
        {brandTitles.map((brand, index) => (
            <a key={index} className="text-dark text-decoration-none"><h4 className="mx-4 my-2 title-font ">{brand.text}</h4></a>
        ))}
      </Container>
    </Navbar>
  );
}
