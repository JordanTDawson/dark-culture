import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { CartItems, Loader } from '../index';
import { handlePayNowClick, updateTotalPrice, fetchCartItems } from '../util-files/cart-utils';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCart();

    async function fetchCart() {

      // Fetch cart items and update the state
      await fetchCartItems(setCart, setTotalPrice, setIsLoading);

    }
  }, [cart]);


  if (isLoading) {

    return <Loader />;

  }

  return (
    <>
      {cart && cart.length > 0 && totalPrice > 0 ? (
        <>
          <Container className="w-100 my-3">
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
              {cart.map((cartItem) => (
                <CartItems key={cartItem.productId} productId={cartItem.productId} updateTotalPrice={updateTotalPrice} />
              ))}
            </Row>
          </Container>
          <Container className="w-100 my-3" style={{ borderRadius: 10, border: '1px solid'}}>
            <h1>Total price: <div className="body-font">${totalPrice}</div></h1>
            <Button className="mb-2" variant="primary" onClick={() => handlePayNowClick(setCart)}>
              <div className="title-font">Pay Now</div>
            </Button>
        </Container>
      </>
      ) : (
        <div className="message-content">
          <div className="text-center my-5">
            <h1>There are no items here.</h1>
            <Button variant="secondary" href="#catalog">
              <span className="body-font">Return to catalog to get some awesome items.</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
