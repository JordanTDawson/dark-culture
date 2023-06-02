import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CartItems from '../catalog-components/cart-items';
import Button from 'react-bootstrap/Button';
import Loading from '../components/loader'

export default function Cart() {

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  function handlePayNowClick() {
    deleteCartItems()
      .then(() => setCart([]))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchCartItemsId()
      .then(cart => {
        setCart(cart);
        updateTotalPrice(cart);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [cart]);

  const updateTotalPrice = cart => {
    if (!cart) {
      return;
    }
    const totalPrice = cart.reduce((total, cartItem) => total + cartItem.price, 0).toFixed(2);
    setTotalPrice(totalPrice);
  };

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

  if (isLoading) {
    <Loading />
  } else {

  return (
    <Container>
      {cart && cart.length > 0 && totalPrice > 0
        ? (
          <Container>
            <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
              {cart.map(cartItem => (
                <CartItems key={cartItem.productId} productId={cartItem.productId} updateTotalPrice={updateTotalPrice} />
              ))}
            </Row>
            <Container>
              <h1>Total price: <div className="body-font">${totalPrice}</div></h1>
              <Button variant="primary" onClick={handlePayNowClick}>
                <div className="title-font">Pay Now</div>
              </Button>
            </Container>
          </Container>
          )
        : (
          <div className="message-content">
            <div className="text-center my-5">
              <h1>There are no items here.</h1>
              <Button variant="secondary" href="#catalog">
                <div className="body-font">Return to catalog to get some awesome items.</div>
              </Button>
            </div>
          </div>
          )}
    </Container>
  )};
}
