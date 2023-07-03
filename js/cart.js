// cart.js
let cart = [];

export function addToCart(product, quantity) {
  const cartItem = cart.find(item => item.product.id === product.id);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
}

export function getCartItems() {
  return cart;
}

export function clearCart() {
  cart = [];
}
