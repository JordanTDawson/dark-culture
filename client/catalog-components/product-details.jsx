import React, { useEffect, useState } from 'react';
import NotFound from '../pages/not-found';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function ProductDetails({ productId }) {

  console.log('typeof productId', typeof productId)

  const [product, setProduct] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const [error, setError] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  function addToCart() {
    if (addedToCart) {
      setError('Already in Cart!');
    } else {
    fetch('/api/shoppingCatalog/CartItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId, price: product.price, cartId: 1 })
    })
      .then(response => {
        if (response.ok) {
          setAddedToCart(true);
        } else {
          setAddedToCart(true);
          setError('Already in Cart!');
        }
      })
      .catch(() => {
        setError('Failed to add item to Cart');
      });
    }
    setButtonClicked(true);
  }

  useEffect(() => {
    fetch(`/api/shoppingCatalog/CartItems`)
      .then(res => res.json())
      .then(cartItems => {
        console.log('cartItems variable', cartItems);
        console.log(typeof productId);
        const addedToCart = cartItems.some(item => item.productId === productId)
        console.log('after added to cart const', addedToCart);
        setAddedToCart(addedToCart);
        })
      .catch(err => console.error(err));
  }, [productId]);

  useEffect(() => {
    fetch(`/api/shoppingCatalog/Catalog/${productId}`)
      .then(res => res.json())
      .then(product => setProduct(product));
  }, [productId]);

  if (error && buttonClicked) {
    return (
      <div className="message-content">
        <div className="text-center my-5">
          <h1>{error}</h1>
          <Button variant="secondary" href="#catalog">Return to Catalog?</Button>
        </div>
      </div>
    );
  } else if (!product) {
    return <NotFound />;
  } else {
    return (
      <>
        <Button href="#catalog" variant="secondary">
          &lt; Back to Catalog
        </Button>
        <Container className="d-flex justify-content-center">
          <Card className="text-center w-25">
            <Card.Img src={product.itemImage} />
            <Card.Body>
              <Card.Title>{product.itemName}</Card.Title>
              <Card.Text>${product.price.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container className="text-center py-2" >
          {addedToCart ? (
              <Button variant="secondary" disabled >
                Added to Cart
              </Button>
              ) : (
              <Button variant="secondary" onClick={addToCart}>Add Item to Cart</Button>
              )}
        </Container>
      </>
    );
  }
}
