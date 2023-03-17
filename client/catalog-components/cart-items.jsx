import React, { useState, useEffect } from 'react';
import NotFound from '../pages/not-found';
import Card from 'react-bootstrap/Card';

export default function CartItems({ cart }) {

  const [cartItem, setCartItem] = useState();

  useEffect(() => {
    fetch(`/api/shoppingCatalog/Catalog/${cart}`)
      .then(res => res.json())
      .then(cartItem => setCartItem(cartItem));
  }, [cart]);
  if (!cartItem) return <NotFound />;
  return (
    <Card>
      <Card.Img variant="top" src={cartItem.itemImage} />
      <Card.Body>
        <Card.Title>{cartItem.itemName}</Card.Title>
        <Card.Text>${cartItem.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
