import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function ThreeImageCol() {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} className="text-center my-4">
        <Col xs={12} md={4} className="my-3">
          <a className="text-decoration-none text-black" href="#catalog">
            <div className="three-column-image">
              <Image className="rounded" src="https://cdn.media.amplience.net/s/hottopic/15411120_hi?$productMainTablet$" />
              <h1>Men&apos;s Shirts</h1>
            </div>
          </a>
        </Col>
        <Col xs={12} md={4} className="my-3">
          <a className="text-decoration-none text-black" href="#catalog">
            <div className="three-column-image">
              <Image className="rounded" src="https://cdn.media.amplience.net/s/hottopic/17891087_hi?$productMainTablet$" />
              <h1>Men&apos;s Pants</h1>
            </div>
          </a>
        </Col>
        <Col xs={12} md={4} className="my-3">
          <a className="text-decoration-none text-black" href="#catalog" >
            <div className="three-column-image">
              <Image className="rounded" src="https://cdn.shopify.com/s/files/1/2637/0296/products/bolt-265-bvl_1024x1024_abeba163-4e03-4a71-abef-69f44d6670ab_large.jpg?v=1638996316" />
              <h1>Men&apos;s Boots</h1>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
