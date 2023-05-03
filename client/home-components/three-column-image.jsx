import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function ThreeImageCol() {
  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} className="text-center my-4">
        <Col>
          <a className="text-decoration-none text-black" href="#catalog">
            <Image className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODucBZAM1Q6RT89Eny1tuAUkF_6Xa5OL4nQ&usqp=CAU" />
            <h1>Men&apos;s Shirts</h1>
          </a>
        </Col>
        <Col>
          <a className="text-decoration-none text-black" href="#catalog">
            <Image className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEZYiL4voHUgvWmseyo1XIHlj_RjHPerki507aXPOBhf6iXis6VSggrOiUATt6Ym2Uc&usqp=CAU" />
            <h1>Men&apos;s Pants</h1>
          </a>
        </Col>
        <Col>
          <a className="text-decoration-none text-black" href="#catalog" >
            <Image className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEZYiL4voHUgvWmseyo1XIHlj_RjHPerki507aXPOBhf6iXis6VSggrOiUATt6Ym2Uc&usqp=CAU" />
            <h1>Men&apos;s Jackets</h1>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
