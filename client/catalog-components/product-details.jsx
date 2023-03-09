import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

export default function ProductDetails({ productId }) {

  const [product, setProduct] = useState();

  useEffect(() => {
    fetch(`/api/shoppingCatalog/Catalog/${productId}`)
      .then(res => res.json())
      .then(product => setProduct(product));
  }, [productId]);

  if (!product) return null;
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
    </>
  );
}
