// src/cartService.js
let cart = [];

export const addToCart = (item) => {
  cart.push(item);
  console.log('Item added to cart:', item);
};

export const getCartItems = () => {
  return cart;
};