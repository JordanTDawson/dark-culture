import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function HomeCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item >
        <div className="d-flex justify-content-center w-100 h-100" >
          <img style={{ height: 500, width: 500 }}
          className="d-block w-50"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwt7KaCBLelo5n1Atee75T-BAV9JJ-Pb-Ow&usqp=CAU"
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Check out our limited selection of dolls!</h3>
          <p>We have a seasonal sale going on for Elf on the Shelf! Have him sit
            anywhere in your home and keep the kids in check!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center w-100 h-100" >
          <img style={{ height: 500, width: 500 }}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItbPRaac0o9e67YxLI2JcAyDStTcFHR8o60VTytSzqo94br_-QNv51afFtP4EE3GO8wU&usqp=CAU"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>We have some pretty awesome deals on our clothes for Elf on the Shelf.</h3>
          <p>Come check out all the different options of clothes that we hand made for your Elf on the Shelf.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-conten-center w-100 h-100">
          <img style={{ height: 500, width: 500 }}
          className="d-block w-50"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Please check out my business we have had zero revenue for weeks.</h3>
          <p>
            My parents said to find a niche to sell to but this was not the right niche.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
