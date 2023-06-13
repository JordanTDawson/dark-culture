import React, { useEffect, useState } from 'react';
import { NotFound, Loader } from '../index';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { addToCart, fetchCartItem, fetchProduct } from '../util-files/product-utils'

export default function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {

      // Fetching cartItems data to check if the item is in the cart.
      const addedToCart = await fetchCartItem(productId);
      setAddedToCart(addedToCart);

      // Fetching product from Catalog table with productId.
      const product = await fetchProduct(productId);
      setProduct(product);
      setIsLoading(false);
    };

    fetchData();

  }, [productId]);

  const handleAddToCartClick = async () => {
    try {
      const isAdded = addToCart(productId, product);
      if (isAdded) {
        setAddedToCart(true);
      } else {
        setAddedToCart(true);
        setError('Already in Cart!');
      }
    } catch (error) {
      setError('Failed to add item to Cart');
    }
  };

  if (error) {
    return (
      <div className="message-content">
        <div className="text-center my-5">
          <h1>{error}</h1>
          <Button variant="secondary" href="#catalog">
            Return to Catalog?
          </Button>
        </div>
      </div>
    );
  } else if (isLoading) {
    return <Loader />;
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
        <Container className="text-center py-2">
          {addedToCart ? (
            <Button className="body-font" variant="secondary">
              <div className="title-font">Added to Cart</div>
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleAddToCartClick}>
              <div className="body-font">Add Item to Cart</div>
            </Button>
          )}
        </Container>
      </>
    );
  }
}
