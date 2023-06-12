import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Message from './cart-message';
import { handleItemRemoval } from '../util-files/cartutils';

export default function CartItems({ productId, updateTotalPrice }) {
  const [cartItem, setCartItem] = useState(null);
  const [message, setMessage] = useState(null);

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

  const handleRemoveItemClick = () => {
    handleItemRemoval(cartItem.productId, updateTotalPrice, setMessage);
  };

  return (
    <div>
      {message && <Message text={message} />}
      {cartItem && (
        <Card className="catalog-item mx-1 my-4">
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
