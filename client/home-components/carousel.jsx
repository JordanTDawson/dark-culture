import React, { useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';

const carouselData = [
  {
    imageUrl: '/images/carousel-image-one.png',
    caption: 'Check out some of the deals on our brand of clothing!',
    description: 'Many celebrities say that we created many styles.'
  },
  {
    imageUrl: '/images/carousel-image-second.png',
    caption: 'Competitors wish they had our selection of clothing!',
    description: 'Check out the catalog before they all get sold out!'
  },
  {
    imageUrl: '/images/carousel-image-third.png',
    caption: 'All of our hand crafted materials are designed specifically for every piece of clothing!',
    description: 'We pride ourselves on keeping our customers happy with the quality of material!'
  }
];

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
