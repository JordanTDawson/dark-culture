import React, { useEffect, useState } from 'react';
import NotFound from '../pages/not-found';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Loading from '../components/loader';

export default function ProductDetails({ productId }) {

  const [product, setProduct] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
  }

  useEffect(() => {
    fetch(`/api/shoppingCatalog/CartItems`)
      .then(res => res.json())
      .then(cartItems => {
        const addedToCart = cartItems.some(item => item.productId === productId)
        setAddedToCart(addedToCart);
        })
      .catch(err => console.error(err));
  }, [productId]);

  useEffect(() => {
    fetch(`/api/shoppingCatalog/Catalog/${productId}`)
      .then(res => res.json())
      .then(product => {
        setProduct(product);
        setIsLoading(false);
      });
  }, [productId]);

  if (error) {
    return (
      <div className="message-content">
        <div className="text-center my-5">
          <h1>{error}</h1>
          <Button variant="secondary" href="#catalog">Return to Catalog?</Button>
        </div>
      </div>
    );
  } else if (isLoading) {
    <Loading />
  } else if (!product) {
    return <NotFound />;
  } else {
    return (
      <>
        <Button href="#catalog" variant="secondary">
          <div className="body-font"> &lt; Back to Catalog </div>
        </Button>
        <Container className="d-flex justify-content-center">
          <Card className="text-center w-25">
            <Card.Img src={product.itemImage} />
            <Card.Body className="text-center">
              <Card.Title className="title-font">{product.itemName}</Card.Title>
              <Card.Text className="body-font">${product.price.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <Container className="text-center py-2" >
          {addedToCart ? (
              <Button className="body-font" variant="secondary" disabled >
                <div className="title-font" >Added to Cart</div>
              </Button>
              ) : (
              <Button variant="secondary" onClick={addToCart}>
                <div className="body-font" >Add Item to Cart</div>
              </Button>
              )}
        </Container>
      </>
    );
  }
}
