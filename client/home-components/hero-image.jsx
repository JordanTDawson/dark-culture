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
    <Card className="bg-light text-dark">
      <Card.Img className="rounded-0" style={{ height: 500 }} src="/images/hero-image.png" />
      <Card.ImgOverlay>
        <Card.Title style={cardTitle} className="text-center mt-2 pt-2">Welcome to our Shop!</Card.Title>
        <Card.Text style={cardText} className="text-center mt-5 pt-5">
          We have some of the finest clothing around! Check out our shop and you
          might find something that you would want to ship to your front doorstep!
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
