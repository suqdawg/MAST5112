
// This is a simplified example. In a real app, you'd likely use a state management library.

let cartItems = [];

/**
 * Adds an item to the cart.
 * @param {object} item - The item to add to the cart. Should have at least 'id' and 'price'.
 * @returns {Array} The updated cart items.
 */
export const addItemToCart = (item) => {
  // In a real app, you might want to check if the item is already in the cart
  // and update the quantity instead of adding a new entry.
  cartItems.push(item);
  return cartItems;
};

/**
 * Removes an item from the cart by its id.
 * @param {string} itemId - The id of the item to remove.
 * @returns {Array} The updated cart items.
 */
export const removeItemFromCart = (itemId) => {
  cartItems = cartItems.filter(item => item.id !== itemId);
  return cartItems;
};

/**
 * Gets all items currently in the cart.
 * @returns {Array} The cart items.
 */
export const getCartItems = () => {
  return cartItems;
};

/**
 * Calculates the total price of all items in the cart.
 * @returns {number} The total price.
 */
export const calculateCartTotal = () => {
  return cartItems.reduce((total, item) => total + item.price, 0);
};

/**
 * Clears all items from the cart.
 * @returns {Array} An empty array.
 */
export const clearCart = () => {
    cartItems = [];
    return cartItems;
}
