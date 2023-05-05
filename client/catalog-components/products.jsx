import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Products({ catalog }) {
  const [productId, setProductId] = useState(null);

  function handleClick(event) {
    setProductId(Number(event.currentTarget.id));
  }

  return (
    <Row xs={1} sm={2} md={4} className="g-4">
      { catalog.map(product => (
        <Col key={product.productId}>
          <a className="text-decoration-none text-black" href={`#products?productId=${productId}`}>
            <Card className="catalog-item" id={product.productId} onClick={handleClick}>
              <Card.Img variant="top" src={product.itemImage} />
              <Card.Body>
                <Card.Title>{product.itemName}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
}
