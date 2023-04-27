import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CartItems({ productId, updateTotalPrice }) {

  const [cartItem, setCartItem] = useState();

  function handleItemRemoval(productId) {
    fetch(`/api/shoppingCatalog/CartItems/${productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.status === 204) {
          setCartItem(null);
          updateTotalPrice();
        } else {
          throw new Error('Failed to delete item');
        }
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetch(`/api/shoppingCatalog/Catalog/${productId}`)
      .then(res => {
        if (res.status === 404) {
          throw new Error('Cart not found');
        }
        return res.json();
      })
      .then(cartItem => setCartItem(cartItem))
      .catch(err => console.error(err));
  }, [productId]);

  return (
    <div>
      {cartItem && (
        <Card className="mx-1 my-4" >
          <Card.Img variant="top" src={cartItem.itemImage} />
          <Card.Body>
            <Card.Title>{cartItem.itemName}</Card.Title>
            <Card.Text>${cartItem.price.toFixed(2)}</Card.Text>
            <Button variant="danger" onClick={() => handleItemRemoval(cartItem.productId)}>Remove Item</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
