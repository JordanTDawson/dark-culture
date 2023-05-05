import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function ProductDetails({ productId }) {

  const [product, setProduct] = useState();

  function addToCart() {
    fetch('/api/shoppingCatalog/CartItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId, price: product.price, cartId: 1 })
    });
  }

  useEffect(() => {
    fetch(`/api/shoppingCatalog/Catalog/${productId}`)
      .then(res => res.json())
      .then(product => setProduct(product));
  }, [productId]);

  if (!product) return null;
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
        <Button variant="secondary" onClick={addToCart}>Add Item to Cart</Button>
      </Container>
    </>
  );
}
