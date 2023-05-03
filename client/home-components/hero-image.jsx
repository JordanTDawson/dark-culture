import React from 'react';
import { Card } from 'react-bootstrap';

const cardTitle = {
  fontSize: '40px'
};

const cardText = {
  fontSize: '30px'
};

export default function HeroImage() {
  return (
    <Card className="bg-light text-dark p-0 m-0 hero-image">
      <Card.Img className="rounded-0 p-0" style={{ height: 500 }} src="/images/hero-image.png" />
      <Card.ImgOverlay className="p-0 m-0">
        <Card.Title style={cardTitle} className="text-center">Welcome to our Shop!</Card.Title>
        <Card.Text style={cardText} className="text-center hero-image-text">
          We have some of the finest clothing around! Check out our shop and you
          might find something that you would want to ship to your front doorstep!
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
