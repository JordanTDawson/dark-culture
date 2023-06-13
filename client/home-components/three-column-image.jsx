import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { imageData } from '../../database/home-components-data.js/three-product-image';

export default function ThreeImageCol() {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} className="text-center my-4">
        {imageData.map((item, index) => (
          <Col key={index} xs={12} md={4} className="my-3">
          <a className="text-decoration-none text-black" href="#catalog">
            <div className="three-column-image">
              <Image className="rounded" src={item.imageUrl} />
              <h1>{item.title}</h1>
            </div>
          </a>
        </Col>
        ))}
      </Row>
    </Container>
  );
}
