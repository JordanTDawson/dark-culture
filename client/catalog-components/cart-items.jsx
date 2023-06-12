import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Message from './cart-message';

export default function CartItems({ productId, updateTotalPrice }) {
  const [cartItem, setCartItem] = useState(null);
  const [message, setMessage] = useState(null);

  const handleItemRemoval = async (productId) => {
    try {
      const res = await fetch(`/api/shoppingCatalog/CartItems/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 204) {
        const cartResponse = await fetch('/api/shoppingCatalog/CartItems');
        const cart = await cartResponse.json();
        updateTotalPrice(cart);
        setMessage('Item removed successfully.');
        setTimeout(() => {
          setMessage(null);
        }, 1000);
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete item.');
    }
  };

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const res = await fetch(`/api/shoppingCatalog/Catalog/${productId}`);
        if (res.status === 404) {
          throw new Error('Cart not found');
        }
        const cartItem = await res.json();
        setCartItem(cartItem);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItem();
  }, [productId]);

  return (
    <div>
      {message && <Message text={message} />}
      {cartItem && (
        <Card className="catalog-item mx-1 my-4">
          <Card.Img className="catalog-image" alt={cartItem.itemName} variant="top" src={cartItem.itemImage} />
          <Card.Body className="text-center">
            <Card.Title className="title-font">{cartItem.itemName}</Card.Title>
            <Card.Text className="body-font">${cartItem.price.toFixed(2)}</Card.Text>
            <Button variant="danger" onClick={() => handleItemRemoval(cartItem.productId)}>
              <div className="body-font">Remove Item</div>
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
