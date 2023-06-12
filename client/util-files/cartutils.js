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
        setMessage('Item removed successfully.');
        setTimeout(() => {
          setMessage(null);
        }, 1000);
      } else {
        throw new Error('Failed to delete item');
      }
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete item.');
    }
  };