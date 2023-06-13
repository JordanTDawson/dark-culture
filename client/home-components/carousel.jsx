import React, { useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import { carouselData } from '../../database/home-components-data.js/carousel-data';

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
        {carouselData.map((item, index) => (
          <Carousel.Item key={index}>
          <Image
          style={{ height: 500, objectFit: 'cover' }}
          className="w-100"
          src={item.imageUrl}
          alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className="text-light">
            <h3 className="title-font">{item.caption}</h3>
            <p className="body-font">{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
