import React from 'react';
import { Container } from 'react-bootstrap';

export default function HeroImage() {
  return (
    <div className="hero-image w-100 m-0">
      <div style={{ height: '500px', width: '100%' }}>
        <img src="/images/hero-image.png" alt="Hero" style={{ objectFit: 'cover', width: '100%' }} className=" hero-img" />
      </div>
      <Container className="text-dark hero-content">
        <h1 className="title-font">Welcome to Dark Culture!</h1>
        <p className="body-font"> We have some of the finest clothing around! Check out our shop and you
      might find something that you would want to ship to your front doorstep!</p>
      </Container>
    </div>
  );
};
