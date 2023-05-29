import React from 'react';
import { Card } from 'react-bootstrap';

export default function HeroImage() {
  return (
    <Card className="bg-light text-dark p-0 m-0 hero-image">
      <Card.Img className="rounded-0 p-0" style={{ height: 500, objectFit: 'cover' }} src="/images/hero-image.png" />
      <Card.ImgOverlay className="p-0 m-0">
        <Card.Title className="text-center display-1 title-font">Welcome to Dark Culture!</Card.Title>
        <Card.Text className="text-center hero-image-text body-font">
          We have some of the finest clothing around! Check out our shop and you
          might find something that you would want to ship to your front doorstep!
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
