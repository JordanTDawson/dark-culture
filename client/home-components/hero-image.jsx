import React from 'react';
import { Card, Container } from 'react-bootstrap';

export default function HeroImage() {
  // return (
  //   <Card className="bg-light text-dark hero-image">
  //     <Card.Img className="rounded-0" style={{ height: 500, objectFit: 'cover' }} src="/images/hero-image.png" />
  //     <Card.ImgOverlay className="">
  //       <h1 className="mb-5 text-center display-1 title-font">Welcome to Dark Culture!</h1>
  //       <p className="mt-5 text-center hero-image-text body-font">
  //         We have some of the finest clothing around! Check out our shop and you
  //         might find something that you would want to ship to your front doorstep!
  //       </p>
  //     </Card.ImgOverlay>
  //   </Card>
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
//   );
// }
