// Utility function to handle the removal of an item from the cart.
export const handleItemRemoval = async (productId, updateTotalPrice, setMessage) => {
    try {
      const res = await fetch(`/api/shoppingCatalog/CartItems/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 204) {
        const cartResponse = await fetch('/api/shoppingCatalog/CartItems');
        const cart = await cartResponse.json();
        updateTotalPrice(cart);
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (error) {
      console.error(error);
    }
};

// Utility function to fetch cart item data based on the provided productId and sets the state of the Cart Item.
export const fetchCartItem = async (productId, setCartItem) => {
    try {
      const res = await fetch(`/api/shoppingCatalog/Catalog/${productId}`);
      if (res.status === 404) {
        throw new Error('Cart not found');
      }
      const cartItem = await res.json();
      setCartItem(cartItem);
    } catch (error) {
      console.error(error);
    }
};

// Utility function to fetch cart items from the server
export const fetchCartItemsId = async () => {
    const response = await fetch('/api/shoppingCatalog/CartItems');
    if (!response.ok) {
      throw new Error(`Failed to fetch cart items: ${response.status}`);
    }
    return response.json();
  };

// Utility function to delete all cart items from the server
export const deleteCartItems = async () => {
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

//Utility function to handle the "Pay Now" button click
export const handlePayNowClick = async (setCart) => {
    try {
      // Utility function to delete all cart items from the server
      await deleteCartItems();
      setCart([]);
    } catch (error) {
      console.error(error);
    }
};

// Utility function to calculate the total price of cart items.
export const updateTotalPrice = (cartItems) => {
    if (!cartItems) {
      return 0;
    }
    // Calculate the total price by summing up the price of each cart item
    const totalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price, 0).toFixed(2);
    return totalPrice;
};

// Utility function to fetch cart items from the server
export const fetchCartItems = async (setCart, setTotalPrice, setIsLoading) => {
    try {
      const cartItems = await fetchCartItemsId();
      setCart(cartItems);
      setTotalPrice(updateTotalPrice(cartItems));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
};