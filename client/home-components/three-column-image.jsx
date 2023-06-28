import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap/';
import { imageData } from '../../database/home-components-data.js/three-product-image';

export default function ThreeImageCol() {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} className="text-center my-4">
        {imageData.map((item, index) => (
          <Col key={index} xs={12} md={4} className="my-3">
          <a className="text-decoration-none text-black" href="#catalog">
            <div className="three-column-image">
              <Image className="m-0 p-0" src={item.imageUrl} />
              <h1>{item.title}</h1>
            </div>
          </a>
        </Col>
        ))}
      </Row>
    </Container>
  );
}
