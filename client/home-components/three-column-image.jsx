import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

export default function ThreeImageCol() {
  return (
    <Container fluid>
      <Row className="text-center my-4">
        <Col sm={4}>
          <Stack className="bg-secondary rounded" direction="horizontal" gap={3}>
            <Image className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODucBZAM1Q6RT89Eny1tuAUkF_6Xa5OL4nQ&usqp=CAU" />
            <a className="text-decoration-none text-black" href="#catalog">
              <h1>Men&apos;s Shirts</h1>
            </a>
          </Stack>
        </Col>
        <Col sm={4}>
          <Stack className="bg-secondary rounded" direction="horizontal" gap={3} >
            <Image className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEZYiL4voHUgvWmseyo1XIHlj_RjHPerki507aXPOBhf6iXis6VSggrOiUATt6Ym2Uc&usqp=CAU" />
            <a className="text-decoration-none text-black" href="#catalog">
              <h1>Men&apos;s Pants</h1>
            </a>
          </Stack>
        </Col>
        <Col sm={4}>
          <Stack className="bg-secondary rounded" direction="horizontal" gap={3} >
            <Image className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEZYiL4voHUgvWmseyo1XIHlj_RjHPerki507aXPOBhf6iXis6VSggrOiUATt6Ym2Uc&usqp=CAU" />
            <a className="text-decoration-none text-black" href="#catalog">
              <h1>Men&apos;s Jackets</h1>
            </a>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
