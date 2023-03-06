import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductDetails from './product-details';

export default function Products({ catalog }) {
  const [productId, setProductId] = useState(null);

  function handleClick(event) {
    setProductId(Number(event.currentTarget.id));
  }

  function renderProductList() {
    return catalog.map(product => (
      <Col key={product.item.itemId}>
        <Card id={product.item.itemId} onClick={handleClick}>
          <Card.Img variant="top" src={product.item.itemImage} />
          <Card.Body>
            <Card.Title>{product.item.itemName}</Card.Title>
            <Card.Text>${product.item.price.toFixed(2)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
  }

  function renderProductDetails() {
    const product = catalog.find(p => p.item.itemId === productId);
    if (product) {
      return <ProductDetails product={product} />;
    }
    return null;
  }

  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {renderProductList()}
      </Row>
      {renderProductDetails()}
    </>
  );
}
