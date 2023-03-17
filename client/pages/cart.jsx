import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import CartItems from '../catalog-components/cart-items';

export default function Cart() {

  const [cart, setCart] = useState();

  useEffect(() => {
    fetch('/api/shoppingCatalog/CartItems')
      .then(res => (res.json()))
      .then(cart => setCart(cart));
  }, []);

  return (
    <Row xs={1} md={4} className="g-4">
      { cart && cart.map(cartItem => (
        <CartItems key={cartItem.productId} cart={cartItem.productId} />
      ))}
    </Row>
  );
}
