import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NotFound from '../pages/not-found';

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

  if (!product) return <NotFound />;
  return (
    <>
      <a href="#catalog" className="btn text-secondary">
        &lt; Back to Catalog
      </a>
      <Card>
        <Card.Img variant="top" src={product.itemImage} />
        <Card.Body>
          <Card.Title>{product.itemName}</Card.Title>
          <Card.Text>${product.price.toFixed(2)}</Card.Text>
        </Card.Body>
      </Card>
      <Button variant="secondary" onClick={addToCart}>Add Item to Cart</Button>
    </>
  );
}
