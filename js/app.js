// app.js
import products from './product.js';
import { addToCart, getCartItems, clearCart } from './cart.js';

const productContainer = document.getElementById('product-container');
const cartContainer = document.getElementById('cart-container');
const clearCartBtn = document.getElementById('clear-cart-btn');

function displayProducts() {
  productContainer.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'col-md-4 mb-4';
    productCard.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">Price: $${product.price}</p>
          <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
    productContainer.appendChild(productCard);
  });
}

function displayCartItems() {
  cartContainer.innerHTML = '';

  if (getCartItems().length === 0) {
    cartContainer.innerHTML = '<p>No items in the cart.</p>';
    return;
  }

  let totalAmount = 0;

  getCart
