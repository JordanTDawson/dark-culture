import React, { useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleIndex = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
    style={{ height: 500 }}
    activeIndex={index}
    onSelect={handleIndex}
    variant="dark">
      <Carousel.Item >
        <Container
        fluid
        className="justify-content-center px-5 w-100" >
          <Image
          style={{ height: 500 }}
          className="w-100"
          fluid
          src="/images/carousel-image-one.png"
          alt="First slide"
        />
        </Container>
        <Carousel.Caption>
          <h3>Check out some of the deals on our brand of clothing!</h3>
          <p>Many celebrities say that we created many styles.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container
        fluid
        className="justify-content-center px-5 w-100">
          <Image
          style={{ height: 500 }}
          className="w-100"
          fluid
          src="/images/carousel-image-second.png"
          alt="Second slide"
          />
        </Container>
        <Carousel.Caption
        className="text-light">
          <h3>Our watches and suits are top sellers right now!</h3>
          <p>Check out the catalog before they all get sold out!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container
        fluid
        className="justify-content-center px-5 w-100">
          <Image style={{ height: 500 }}
          className="w-100"
          fluid
          src="/images/carousel-image-third.png"
          alt="Third slide"
        />
        </Container>
        <Carousel.Caption className="text-light" >
          <h3>All of our hand crafted materials are designed specifically for every piece of clothing!</h3>
          <p>We pride ourselves on keeping our customers happy with the quality of material!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
