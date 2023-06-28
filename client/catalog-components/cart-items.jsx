import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { handleItemRemoval, fetchCartItem } from '../util-files/cart-utils';

export default function CartItems({ productId, updateTotalPrice }) {
  const [cartItem, setCartItem] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Utility function to fetch cart item data based on the provided productId and sets the state of the Cart Item.
    fetchCartItem(productId, setCartItem);

  }, [productId]);

  const handleRemoveItemClick = () => {
    // Utility function to handle the removal of an item from the cart.
    handleItemRemoval(cartItem.productId, updateTotalPrice, setMessage);

  };

  return (
    <div>
      {cartItem && (
        <Card className="catalog-item">
          <Card.Img className="catalog-image" alt={cartItem.itemName} variant="top" src={cartItem.itemImage} />
          <Card.Body className="text-center">
            <Card.Title className="title-font">{cartItem.itemName}</Card.Title>
            <Card.Text className="body-font">${cartItem.price.toFixed(2)}</Card.Text>
            <Button variant="danger" onClick={handleRemoveItemClick}>
              <div className="body-font">Remove Item</div>
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
