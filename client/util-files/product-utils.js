// Utility function to add a product to the cart.
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

// Utility function to check CartItems for matching productId.
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

// Utility function to fetch individual product data and return response.json
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

// Utility function to fetch entire catalog and return response.json
export const fetchCatalog = async () => {
    try {
      const response = await fetch('/api/shoppingCatalog/Catalog');
      const catalogData = await response.json();
      return catalogData;
    } catch (error) {
      console.error(error);
      return [];
    }
};