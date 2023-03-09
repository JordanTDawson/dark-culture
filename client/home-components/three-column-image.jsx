import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function ThreeImageCol(props) {
  return (
    <Container fluid>
      <Row className="text-center mt-5">
        <Col>
          <a className="text-decoration-none text-black" href="#catalog">
            <h1>Shirts!</h1>
            <Image src="https://cdn11.bigcommerce.com/s-86394/products/26561/images/122541/1027150497__63120.1674053989.500.659.jpg?c=2" />
          </a>
        </Col>
        <Col>
          <a className="text-decoration-none text-black" href="#catalog">
            <h1>Pants!</h1>
            <Image src="https://ae01.alicdn.com/kf/Se3e6b3135ae04287a592ef68f1ecbd41F/2022-3D-Ramen-Chicken-Noodle-Soup-Beef-Pant-Food-Funny-Trousers-Men-Women-Cotton-Novelty-Pants.jpg_640x640.jpg" />
          </a>
        </Col>
        <Col>
          <a className="text-decoration-none text-black" href="#catalog">
            <h1>Jackets!</h1>
            <Image src="https://i.ebayimg.com/images/g/R2gAAOSwloRjxND~/s-l500.jpg" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
