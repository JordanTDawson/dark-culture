import React, { useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleIndex = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="justify-content-center w-75 mb-5" fluid>
      <Carousel
      style={{ height: 500 }}
      className="w-100"
      activeIndex={index}
      onSelect={handleIndex}
      variant="dark">
        <Carousel.Item>
          <Image
          style={{ height: 500, objectFit: cover }}
          className="w-100"
          src="/images/carousel-image-one.png"
          alt="First slide"
        />
          <Carousel.Caption>
            <h3 className="title-font">Check out some of the deals on our brand of clothing!</h3>
            <p className="body-font">Many celebrities say that we created many styles.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
          style={{ height: 500, objectFit: cover }}
          className="w-100"
          src="/images/carousel-image-second.png"
          alt="Second slide"
          />
          <Carousel.Caption
          className="text-light">
            <h3 className="title-font">Competitors wish they had our selection of clothing!</h3>
            <p className="body-font">Check out the catalog before they all get sold out!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{ height: 500, objectFit: cover }}
          className="w-100"
          src="/images/carousel-image-third.png"
          alt="Third slide"
        />
          <Carousel.Caption className="text-light" >
            <h3 className="title-font">All of our hand crafted materials are designed specifically for every piece of clothing!</h3>
            <p className="body-font">We pride ourselves on keeping our customers happy with the quality of material!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
