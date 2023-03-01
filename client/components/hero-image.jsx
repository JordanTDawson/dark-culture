import React from 'react';
import { Card } from 'react-bootstrap';

const cardTitle = {
  fontSize: '40px'
};

const cardText = {
  fontSize: '30px'
};

export default function HeroImage(props) {
  return (
    <Card className="bg-dark text-white rounded-0">
      <Card.Img style={{ height: 400 }} src="https://www.npd.com/wp-content/uploads/2021/05/fashion-banner-1440x480.jpg" />
      <Card.ImgOverlay>
        <Card.Title style={cardTitle} className="text-center mt-5">Welcome to our Shop!</Card.Title>
        <Card.Text style={cardText} className="text-center mt-3">
          We have some of the finest clothing around! Check out our shop and you
          might find something that you would want to ship to your front doorstep!
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
