/**
 * Utility function to add a product to the cart.
 * @param {string} productId - The ID of the product to add.
 * @param {object} product - The product details.
 * @returns {boolean} - Indicates whether the product was added to the cart.
 */
export const addToCart = async (productId, product) => {
    try {
      const response = await fetch('/api/shoppingCatalog/CartItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, price: product.price, cartId: 1 }),
      });
      if (response.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error('Failed to add item to Cart');
    }
};

export const fetchCartItem = async (productId) => {
    try {
      const response = await fetch(`/api/shoppingCatalog/CartItems`);
      const cartItems = await response.json();
      const addedToCart = cartItems.some((item) => item.productId === productId);
      return addedToCart;
    } catch (error) {
      console.error(error);
      return false;
    }
};
  
export const fetchProduct = async (productId) => {
    try {
        const response = await fetch(`/api/shoppingCatalog/Catalog/${productId}`);
        const product = await response.json();
        return product;
    } catch (error) {
        console.error(error);
        return null;
    }
};
  