import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import CartItems from '../catalog-components/cart-items';
import Button from 'react-bootstrap/Button';

export default function Cart() {

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function handlePayNowClick() {
    deleteCartItems()
      .then(() => setCart([]))
      .catch(err => console.error(err));
  }

  const updateTotalPrice = cart => {
    if (!cart) {
      return;
    }
    const totalPrice = cart.reduce((total, cartItem) => total + cartItem.price, 0).toFixed(2);
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    fetchCartItemsId()
      .then(cart => {
        setCart(cart);
        updateTotalPrice(cart);
      })
      .catch(err => console.error(err));
  }, []);

  const fetchCartItemsId = async () => {
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
      {cart && cart.length > 0 && totalPrice > 0
        ? (
          <div>
            <Row xs={1} md={4} className="g-4">
              {cart.map(cartItem => (
                <CartItems key={cartItem.productId} productId={cartItem.productId} updateTotalPrice={updateTotalPrice} />
              ))}
            </Row>
            <h1>Total price: ${totalPrice}</h1>
            <Button variant="primary" onClick={handlePayNowClick}>
              Pay Now
            </Button>
          </div>
          )
        : (
          <div className="message-content">
            <div className="text-center my-5">
              <h1>There are no items here.</h1>
              <Button variant="secondary" href="#catalog">Return to catalog to get some awesome items.</Button>
            </div>
          </div>
          )}
    </div>
  );
}
