import React, { useState } from 'react';
import NotFound from '../pages/not-found';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Products({ catalog }) {
  const [productId, setProductId] = useState(null);

  function handleClick(event) {
    setProductId(Number(event.currentTarget.id));
  }

  console.log('catalog console.log', catalog);

  return (
    <Container className="w-100 my-3">
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        { catalog.length === 0 && <NotFound />}
        { catalog && catalog.length > 0 && catalog.map(product => (
          <div key={product.productId}>
            <a className="text-decoration-none text-black" href={`#products?productId=${productId}`}>
              <Card className="catalog-item" id={product.productId} onClick={handleClick}>
                <Card.Img className="catalog-image" style={{ objectFit: 'contain'}} alt={product.itemName} variant="top" src={product.itemImage} />
                <Card.Body className="text-center" >
                  <Card.Title className="card-title title-font" >{product.itemName}</Card.Title>
                  <Card.Text className="body-font" >${product.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </div>
        ))}
      </Row>
    </Container>
  );
}
