import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ProductDetails({ product }) {
  return (
    <Card>
      <Card.Img variant="top" src={product.item.itemImage} />
      <Card.Body>
        <Card.Title>{product.item.itemName}</Card.Title>
        <Card.Text>${product.item.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
