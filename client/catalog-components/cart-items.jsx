import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Message from './cart-message';
import Loading from '../components/loader';

export default function CartItems({ productId, updateTotalPrice }) {

  const [cartItem, setCartItem] = useState();
  const [message, setMessage] = useState(null);

  function handleItemRemoval(productId) {
    fetch(`/api/shoppingCatalog/CartItems/${productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.status === 204) {
          fetch('/api/shoppingCatalog/CartItems')
            .then(res => res.json())
            .then(cart => {
              updateTotalPrice(cart);
              setMessage('Item removed successfully.');
              setTimeout(() => {
                setMessage(null);
              }, 1000);
            })
            .catch(err => console.error(err));
        } else {
          throw new Error('Failed to delete item');
        }
      })
      .catch(err => {
        console.error(err);
        setMessage('Failed to delete item.');
      })
  }

  useEffect(() => {
    fetch(`/api/shoppingCatalog/Catalog/${productId}`)
      .then(res => {
        if (res.status === 404) {
          throw new Error('Cart not found');
        }
        return res.json();
      })
      .then(cartItem => {
        setCartItem(cartItem)
      })
      .catch(err => console.error(err));
  }, [productId]);

  return (
    <div>
      {message && <Message text={message} />}
      {cartItem && (
        <Card className="catalog-item mx-1 my-4" >
          <Card.Img className="catalog-image" alt={cartItem.itemName} variant="top" src={cartItem.itemImage} />
          <Card.Body className="text-center">
            <Card.Title className="title-font" >{cartItem.itemName}</Card.Title>
            <Card.Text className="body-font" >${cartItem.price.toFixed(2)}</Card.Text>
            <Button variant="danger" onClick={() => handleItemRemoval(cartItem.productId)}>
              <div className="body-font">Remove Item</div>
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
