import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import CartItems from '../catalog-components/cart-items';
import Button from 'react-bootstrap/Button';

export default function Cart() {

  const [cart, setCart] = useState([]);

  function handlePayNowClick() {
    deleteCartItems()
      .then(() => setCart([]))
      .catch(err => console.error(err));
  }

  useEffect(() => {

    fetchCartItems()
      .then(cart => setCart(cart))
      .catch(err => console.error(err));
  }, []);

  const calculateTotal = () => {
    return cart.reduce((total, cartItem) => total + cartItem.price, 0).toFixed(2);
  };

  const fetchCartItems = async () => {
    const res = await fetch('/api/shoppingCatalog/CartItems');
    if (!res.ok) {
      throw new Error(`Failed to fetch cart items: ${res.status}`);
    }
    return res.json();
  };

  const deleteCartItems = async () => {
    const res = await fetch('/api/shoppingCatalog/CartItems', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    if (!res.ok) {
      throw new Error(`Failed to delete cart items: ${res.status}`);
    }
  };

  return (
    <div>
      {cart && cart.length > 0
        ? (
          <div>
            <Row xs={1} md={4} className="g-4">
              {cart.map(cartItem => (
                <CartItems key={cartItem.productId} productId={cartItem.productId} />
              ))}
            </Row>
            <div>Total price: ${calculateTotal()}</div>
            <Button variant="primary" onClick={handlePayNowClick}>
              Pay Now
            </Button>
          </div>
          )
        : (
          <div>
            <h1>There are no items here.</h1>
            <a href="/">Return to catalog to get some awesome items in here.</a>
          </div>
          )}
    </div>
  );
}
