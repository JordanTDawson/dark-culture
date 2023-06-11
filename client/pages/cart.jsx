import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CartItems from '../catalog-components/cart-items';
import Button from 'react-bootstrap/Button';
import Loading from '../components/loader';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePayNowClick = async () => {
    try {
      await deleteCartItems();
      setCart([]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartItems = await fetchCartItemsId();
        setCart(cartItems);
        updateTotalPrice(cartItems);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, [cart]);

  const updateTotalPrice = (cartItems) => {
    if (!cartItems) {
      return;
    }
    const totalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price, 0).toFixed(2);
    setTotalPrice(totalPrice);
  };

  const fetchCartItemsId = async () => {
    const response = await fetch('/api/shoppingCatalog/CartItems');
    if (!response.ok) {
      throw new Error(`Failed to fetch cart items: ${response.status}`);
    }
    return response.json();
  };

  const deleteCartItems = async () => {
    const response = await fetch('/api/shoppingCatalog/CartItems', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to delete cart items: ${response.status}`);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {cart && cart.length > 0 && totalPrice > 0 ? (
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
            {cart.map((cartItem) => (
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
    </Container>
  );
}
