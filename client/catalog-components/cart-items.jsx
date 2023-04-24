import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CartItems({ productId }) {

  const [cartItem, setCartItem] = useState();
  const [isRemoved, setIsRemoved] = useState(false);

  function handleItemRemoval(productId) {
    fetch(`/api/shoppingCatalog/CartItems/${productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.status === 204) {
          setIsRemoved(true);
          setCartItem(null);
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

  if (cartItem === undefined) {
    return <div>Loading...</div>;
  } else if (cartItem === null) {
    return (
      <div>
        {isRemoved
          ? (
            <div>Item succesfully removed from cart</div>
            )
          : (
            <div>No items in cart</div>
            )}
      </div>
    );
  } else if (cartItem && cartItem.price) {
    return (
      <Card className="mx-1 my-4" >
        <Card.Img variant="top" src={cartItem.itemImage} />
        <Card.Body>
          <Card.Title>{cartItem.itemName}</Card.Title>
          <Card.Text>${cartItem.price.toFixed(2)}</Card.Text>
          <Button variant="danger" onClick={() => handleItemRemoval(cartItem.productId)}>Remove Item</Button>
        </Card.Body>
      </Card>
    );
  }
}
